import { connect } from 'react-redux';
import * as Action from '../../actions/hiragana_actions';
import Hiragana from './hiragana';

const mapStateToProps = ({ session, hiragana }) => ({
  baseHiragana: hiragana.normalGroupings,
  variantHiragana: hiragana.variantGroupings
});

const mapDispatchToProps = (dispatch) => ({
  requestAllHiragana: () => dispatch(Action.requestAllHiragana()),
  requestSingleHiragana: (id) => dispatch(Action.requestSingleHiragana(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Hiragana)
