import React from 'react';
import { hashHistory, Link } from 'react-router';

class PublicDecks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.publicDecks.length) {
      this.props.requestPublicDecks();
    }
  }

  render() {
    return(
      <div className="public-decks">
        HELLO!
      </div>
    );
  }
}

export default PublicDecks;
