import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionPageContainer from './session/session_page_container'

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
        </Route>
        <Route path="/entry" component={SessionPageContainer} onEnter={_redirectIfLoggedIn}>
          <Route path="/login" component={SessionPageContainer} />
          <Route path="/signup" component={SessionPageContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
