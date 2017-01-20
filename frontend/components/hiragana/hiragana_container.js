import { connect } from 'react-redux';
import * as Action from '../../actions/kana_actions';
import Hiragana from './hiragana';

const mapStateToProps = ({ session, kana }) => {
  return ({
    baseHiragana: kana.hiragana.normalGroupings,
    variantHiragana: kana.hiragana.variantGroupings
  });
}

const mapDispatchToProps = (dispatch) => ({
  requestAllHiragana: () => dispatch(Action.requestAllHiragana()),
  requestSingleHiragana: (id) => dispatch(Action.requestSingleHiragana(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Hiragana)
