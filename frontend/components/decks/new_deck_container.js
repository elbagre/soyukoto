import { createDeck, requestDeck } from '../../actions/deck_actions';
import { createPublicDeck } from '../../actions/public_deck_actions';
import { connect } from 'react-redux';
import { requestMatches, clearMatches } from '../../actions/query_actions';
import NewDeck from './new_deck';

const mapStateToProps = ({ query }) => ({
  queryResults: query
});

const mapDispatchToProps = (dispatch, { location }) => ({
  createDeck: (deck) => dispatch(createDeck(deck)),
  createPublicDeck: (deck) => dispatch(createPublicDeck(deck)),
  requestMatches: (query) => dispatch(requestMatches(query)),
  clearMatches: () => dispatch(clearMatches()),
  location: location.pathname.split('/')[1],
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
