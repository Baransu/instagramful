import { combineReducers } from 'redux';
import images from './images';
// import visibilityFilter from './visibilityFilter';

// general list off all combined reducers
const instagramfulApp = combineReducers({
  images,
  // visibilityFilter
})


export default instagramfulApp;
