import { connect } from 'react-redux';
import * as Deck from '../../actions/deck_actions';
import { createCard, destroyCard } from '../../actions/card_actions';
import * as Query from '../../actions/query_actions';
import DeckPage from './deck_page';

const mapStateToProps = ({ decks, query }) => ({
  deck: decks.detail,
  queryResults: query
});

const mapDispatchToProps = (dispatch, { location }) => ({
  createCard: (card) => dispatch(createCard(card)),
  receiveDeck: (deck) => dispatch(Deck.receiveDeck(deck)),
  destroyCard: (id) => dispatch(destroyCard(id)),
  requestDeck: (id) => dispatch(Deck.requestDeck(id)),
  requestMatches: (query) => dispatch(Query.requestMatches(query)),
  location: parseInt(location.pathname.slice(6))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckPage);
