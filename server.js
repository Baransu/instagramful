const express = require('express');
const app = express();
const http = require('http');
const httpApp = http.Server(app);
const io = require('socket.io')(httpApp);
const Client = require('node-rest-client').Client;
const client = new Client();
const mongoose = require('mongoose');
const async = require('async');
const uuid = require('uuid');

var port = process.env.PORT || 3000

// MODELS
const User = require('./models/user.js');

var currentUsers = [];

var imagesQueue = [];

app.use(express.static(__dirname + '/static'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

httpApp.listen(port, function(){
  // TODO more use full log?
  console.log('listening on *:', port);
});

mongoose.connect('mongodb://admin:admin@ds015902.mlab.com:15902/instagramful', function (error) {
    if (error) throw err;
    console.log('Connected to mongolab database')
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.pastImages = [];

  init(startInstaCalls);

  socket.interval = setInterval(function() {
    if(imagesQueue.length) {
      var img = imagesQueue.shift();
      shuffle(imagesQueue);
      if(!socket.pastImages.find(i => i == img.id)) {
        socket.emit('images', img);
        socket.pastImages.push(img.id);
      }
    } else {
      startInstaCalls();
    }
  }, 2000);

  socket.on('new-user', function(user){
    validInstaCall(user);
  });

  socket.on('disconnect', function () {
    clearInterval(socket.interval);
  });
});

var baseUsers = [
  'sajgonek123',
]

function instaCall(user) {
  client.get("https://www.instagram.com/" + user + "/media/", function(data, res) {
    // console.log(data.items);

    // TODO other posible options
    // location
    // comments (count)
    // created time
    // likes
    // var items = data.items.filter(i => (Date.now() - i.created_time) < 1000);
    var items = data.items;
    // console.log(items.length)
    items.forEach(function(item) {
      var imgToAdd = {
          id: uuid.v1(),
          nick: item.user.username,
          profileImg: item.user.profile_picture,
          link: item.link,
          url: item.images.standard_resolution.url
      };

      var exist = imagesQueue.find(i => i.id == imgToAdd.id);
      if(!exist) {
        imagesQueue.push(imgToAdd);
      }
    })
  });
}

function validInstaCall(user) {
  client.get("https://www.instagram.com/" + user + "/media/", function(data, res){
    if(data.status == 'ok') {
      instaCall(user);
      addUser(user);
    }
  });
}

function init(cb) {
  User.find({}, function (err, data) {
    currentUsers = data.map(function(user) {
      return user.name;
    });
    shuffle(currentUsers);
    cb();
  });
}

function addBaseUsers() {
  baseUsers.forEach(function(user) {
    addUser(user);
  });
}

// add new user to database
function addUser(name) {
  User.find({ name: name }, function (err, data) {
    if(!data.length) {
      var newUser = new User({
        name: name,
      });
      newUser.save(function(err){
        if(err) {
          console.log('User cannot be added: ' + err);
        } else {
          console.log('User added!');
        }
      });
    }
  });
  var exist = currentUsers.find(u => u == name)
  if(!exist) {
    currentUsers.push(name);
  }
}

function startInstaCalls() {
  async.forEachOf(currentUsers, function (user, key, callback) {
    // console.log('instaCall for: ', user)
    instaCall(user);
  }, function (err) {
    if(err) {
      console.log('Cannot process user: ', err);
    }
  });
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
