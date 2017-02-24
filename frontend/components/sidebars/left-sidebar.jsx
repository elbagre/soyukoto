import React from 'react';
import { Link, withRouter } from 'react-router';

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="left-sidebar">
        <ul>
          <Link to="/deck">My Decks</Link>
          <Link to="/deck">Public Decks</Link>
          <Link to="/deck">Lessons</Link>
        </ul>
      </div>
    )
  }
}

export default withRouter(LeftSidebar);
