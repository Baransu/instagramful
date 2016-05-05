//react
import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import App from './components/App';

// init sotre
let store = createStore(todoApp);

// init react components
ReactDOM.render(
    // provide store to every signed child component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
