import { connect } from 'react-redux';
import * as Deck from '../../actions/deck_actions';
import Review from './review';

const mapStateToProps = ({ decks }) => {
  return ({
    deck: decks.detail
  });
}

const mapDispatchToProps = (dispatch, { location }) => {
  return({
    requestDeck: (id) => dispatch(Deck.requestDeck(id)),
    deckId: parseInt(location.pathname.slice(6))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
