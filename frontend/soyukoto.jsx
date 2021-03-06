// React
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// Components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store.getState();
  const root = document.getElementById('root')
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store} />, root);
});



// Potentially think about using fetch API for requests in util
// Potentially useful in learning promises
