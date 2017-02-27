import { connect } from 'react-redux';
import PublicDecks from './public_decks';
import * as Action from '../../actions/public_deck_actions';

const mapStateToProps = ({ publicDeck }) => ({
  publicDecks: publicDeck.index
});

const mapDispatchToProps = (dispatch) => ({
  requestPublicDecks: () => dispatch(Action.requestPublicDecks()),
  requestPublicDeck: () => dispatch(Action.requestPublicDeck()),
  createPublicDeck: (deck) => dispatch(Action.createPublicDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicDecks);
