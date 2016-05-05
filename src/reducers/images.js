//manage every action for single todo
const image = (state, action) => {
  switch(action.type) {
    case 'ADD_IMAGE':
      return {
        link: action.link,
        img: action.img,
        nick: action.nick,
        profileImg: action.profileImg,
        left: action.left,
        top: action.top,
      }
    default:
      return state;
  }
}

// manage every action for all todos
const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [
        ...state,
        image(undefined, action)
      ]
    default:
      return state;
  }
}

export default images;
