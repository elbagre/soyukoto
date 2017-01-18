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
          <h3>行こうよ</h3>
          <h3>Ikoyo</h3>
          <div>
            <p>Youkoso {this.props.currentUser.username}</p>
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
