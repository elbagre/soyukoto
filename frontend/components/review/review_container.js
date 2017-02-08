import { connect } from 'react-redux';
import * as Deck from '../../actions/deck_actions';
import Review from './review';

const mapStateToProps = ({ decks }) => {
  return ({
    deck: decks.detail
  });
}

const mapDispatchToProps = (dispatch, { location }) => {
  debugger
  return({
    requestDeck: (id) => dispatch(requestDeck(id)),
    deck: location.pathname.slice(6, 8)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
