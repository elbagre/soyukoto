// React
import React from 'react';
import { Provider } from 'react-redux';
// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components
import App from './app';
import SessionPageContainer from './session/session_page_container';
import HiraganaContainer from './hiragana/hiragana_container';

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
      replace('/home');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <Route path="/home" component={HiraganaContainer} />
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
