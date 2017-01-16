import { connect } from 'react-redux';
import * as Action from '../../actions/hiragana_actions';
import Hiragana from './hiragana';

const mapStateToProps = ({ session, hiragana }) => ({
  currentUser: session.currentUser,
  hiragana
});

const mapDispatchToProps = (dispatch) => ({
  requestAllHiragana: () => dispatch(Action.requestAllHiragana()),
  requestSingleHiragana: (id) => dispatch(Action.requestSingleHiragana(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Hiragana)
