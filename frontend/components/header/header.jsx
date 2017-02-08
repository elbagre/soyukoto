import React from 'react';
import { withRouter } from 'react-router'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.router.push("/login");
    }
  }

  render() {
    if (this.props.loggedIn) {
      return(
        <div className="header">
          <div />
          <h3>Ikoyo</h3>
          <div>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default withRouter(Header);
