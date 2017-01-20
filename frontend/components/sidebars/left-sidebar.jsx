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
          <Link to="/home">Hiragana</Link>
          <Link to="/katakana">Katakana</Link>
          <Link to="/deck">Flashcards</Link>
        </ul>
      </div>
    )
  }
}

export default withRouter(LeftSidebar);
