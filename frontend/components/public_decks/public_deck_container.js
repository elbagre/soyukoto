import PublicDeck from './public_deck';
import * as Action from '../../actions/public_deck_actions';
import * as Deck from '../../actions/deck_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ publicDeck }) => ({
  publicDeck: publicDeck.detail
});

const mapDispatchToProps = (dispatch, { location }) => ({
  requestPublicDeck: (id) => dispatch(Action.requestPublicDeck(id)),
  receivePublicDeck: (deck) => dispatch(Action.receivePublicDeck(deck)),
  createDeck: (deck) => dispatch(Deck.createDeck(deck)),
  location: parseInt(location.pathname.slice(7))
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicDeck);
