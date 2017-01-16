import { connect } from 'react-redux';
import * as Action from '../../actions/session_actions';
import SessionPage from './session_page';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? Action.login : Action.signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
