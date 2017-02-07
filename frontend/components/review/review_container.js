import { connect } from 'react-redux';
import * as Deck from '../../actions/deck_actions';
import Review from './review';

const mapStateToProps = ({ deck }) => ({
  deck: deck.detail
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});
