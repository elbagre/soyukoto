import { connect } from 'react-redux';
import RightSidebar from './right_sidebar';

const mapStateToProps = ({session}) => {
  return(
    {
      currentUser: session.currentUser
    }
  );
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    location: location.pathname.split('/').slice(-1)[0]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
