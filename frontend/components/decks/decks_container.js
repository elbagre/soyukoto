import { connect } from 'react-redux';
import * as Action from '../../actions/deck_actions';
import Decks from './decks';

const mapStateToProps = ({ session, decks }) => ({
    currentUser: session.currentUser,
    decks: decks.index,
    currentDeck: decks.detail
});

const mapDispatchToProps = (dispatch) => ({
  requestDecks: () => dispatch(Action.requestAllDecks()),
  requestDeck: (id) => dispatch(Action.requestDeck()),
  createDeck: (deck) => dispatch(Action.createDeck(deck)),
  destroyDeck: (id) => dispatch(Action.destroyDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
