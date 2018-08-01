import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './components/Calendar';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducer from './reducers'

const middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Calendar />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

