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

  componentDidUpdate() {
  }

  decks() {
    if (this.props.publicDecks.length) {
      return this.props.publicDecks.map( (deck, idx) => {
        return(
          <li key={idx}>
            <Link to={`public/${deck.id}`}>
              <p>{deck.name}</p>
              <p>{deck.description}</p>
              <p></p>
            </Link>
          </li>
        );
      });
    }
  }

  render() {
    return(
      <div className="public-decks">
        <h1>Public Decks</h1>
        <div>
          <h2>Popular Decks</h2>
          <ul className="public-deck-nav">
            <li><p>Name</p></li>
            <li><p>Description</p></li>
            <li><p>Rating</p></li>
          </ul>
          <ul className="public-decks-list">
            {this.decks()}
          </ul>
        </div>
        <div className="public-deck-categories">
          <h2>Topics</h2>
        </div>
      </div>
    );
  }
}

export default PublicDecks;
