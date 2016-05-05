import uuid from 'uuid';

export const addImage = ({ nick, profileImg, url, link }) => {
  return {
    type: 'ADD_IMAGE',
    nick,
    profileImg,
    img: url,
    link,
    left: Math.floor(Math.random() * (window.innerWidth - 150)),
    top: Math.floor(Math.random() * (window.innerHeight - 150)),
  }
}

export const removeLastImage = (size) => {
  return {
    type: 'TRUNCAT',
    size
  }
}
