import uuid from 'uuid';

export const addImage = ({ nick, profileImg, url, link }) => {
  return {
    type: 'ADD_IMAGE',
    nick,
    profileImg,
    img: url,
    link,
    left: Math.floor(Math.random() * (window.innerWidth - 200)),
    top: Math.floor(Math.random() * (window.innerHeight - 200)),
  }
}
