import { connect } from 'react-redux';
import * as Session from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(Session.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
