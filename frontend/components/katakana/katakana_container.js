import { connect } from 'react-redux';
import * as Action from '../../actions/kana_actions';
import Katakana from './katakana';

const mapStateToProps = ({ session, kana }) => ({
  baseKatakana: kana.katakana.normalGroupings,
  variantKatakana: kana.katakana.variantGroupings
});

const mapDispatchToProps = (dispatch) => ({
  requestAllKatakana: () => dispatch(Action.requestAllKatakana()),
  requestSingleKatakana: (id) => dispatch(Action.requestSingleKatakana(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Katakana)
