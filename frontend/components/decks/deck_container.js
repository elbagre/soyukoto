import { connect } from 'react-redux';
import * as Deck from '../../actions/deck_actions';
import DeckPage from './deck_page';

const mapStateToProps = ({ decks }) => ({
  deck: decks.detail
});

const mapDispatchToProps = (dispatch, { location }) => ({
  requestDeck: (id) => dispatch(Deck.requestDeck(id)),
  location: location.pathname.slice(6)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckPage);
