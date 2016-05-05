//react
import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import instagramfulApp from './reducers';
import App from './components/App';

import createApp from './createApp';

// init sotre
const store = createStore(instagramfulApp);

createApp(store);

ReactDOM.render(
    // provide store to child components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
