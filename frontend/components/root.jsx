// React
import React from 'react';
import { Provider } from 'react-redux';
// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components
import App from './app';
import SessionPageContainer from './session/session_page_container';
import DecksContainer from './decks/decks_container';
import NewDeckContainer from './decks/new_deck_container';
import DeckContainer from './decks/deck_container';
import ReviewContainer from './review/review_container';
import PublicDeckContainer from './public_decks/public_deck_container';
import PublicDecksContainer from './public_decks/public_decks_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    } else if (nextState.location.pathname === '/') {
      replace('/deck');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/deck');
    }
  };

  // <Route path="/deck/:id/review" component={ReviewContainer} />
  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <Route path="/deck" component={DecksContainer} />
          <Route path="/deck/new" component={NewDeckContainer} />
          <Route path="/deck/edit" component={NewDeckContainer} />
          <Route path="/deck/:id" component={DeckContainer} />
          <Route path="/deck/:id/review" component={ReviewContainer} />
          <Route path="/public" component={PublicDecksContainer} />
          <Route path="/public/new" component={NewDeckContainer} />
          <Route path="/public/:id" component={PublicDeckContainer} />
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

// hiragana/:id/test
// Store information related to specific kana
// Oskar's project - reference
