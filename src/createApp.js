import io from 'socket.io-client';

// import action
import { addImage } from './actions';

// export const socket = io('localhost:3000');
export const socket = io();

const nick = prompt('Could you enter your Instagram nick?');

socket.emit("new-user", nick);
const createApp = (store) => {
  socket.on('images', (image) => {
    store.dispatch(addImage(image));
  });
}

export default createApp
