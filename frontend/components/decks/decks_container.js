import { connect } from 'react-redux';
import * as Action from '../../actions/deck_actions';
import * as Query from '../../actions/query_actions';
import Decks from './decks';

const mapStateToProps = ({ session, decks, query }) => ({
    decks: decks.index,
    currentDeck: decks.detail,
    queryResults: query
});

const mapDispatchToProps = (dispatch) => ({
  requestMatches: (query) => dispatch(Query.requestMatches(query)),
  clearMatches: () => dispatch(Query.clearMatches()),
  requestDecks: () => dispatch(Action.requestAllDecks()),
  requestDeck: (id) => dispatch(Action.requestDeck()),
  createDeck: (deck) => dispatch(Action.createDeck(deck)),
  destroyDeck: (id) => dispatch(Action.destroyDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
