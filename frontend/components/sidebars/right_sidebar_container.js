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
    location: location.pathname.slice(1)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
