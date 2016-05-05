import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// todoReducer
// every new event will go throught every reduce function
// todos
// visibilityFilter
// every reduce function have the same arguments
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;
