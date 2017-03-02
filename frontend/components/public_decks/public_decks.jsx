import React from 'react';
import { hashHistory, Link } from 'react-router';

class PublicDecks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPublicDecks();
  }

  componentDidUpdate() {
  }

  decks() {
    if (this.props.publicDecks) {
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
          <div className="section-header">
            <h2>Popular Decks</h2>
            <Link to="/public/new">Create Deck+</Link>
          </div>
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
          <ul>
            <li>
              <h4>Kana</h4>
              <p></p>
            </li>
            <li>
              <h4>Joyo</h4>
              <p></p>
            </li>
            <li>
              <h4>JLPT</h4>
              <p></p>
            </li>
            <li>
              <h4>Tourism</h4>
              <p></p>
            </li>
            <li>
              <h4>School</h4>
              <p></p>
            </li>
            <li>
              <h4>Work</h4>
              <p></p>
            </li>
            <li>
              <h4>Bar</h4>
              <p></p>
            </li>
            <li>
              <h4>Food</h4>
              <p></p>
            </li>
            <li>
              <h4>Shopping</h4>
              <p></p>
            </li>
            <li>
              <h4>Sports</h4>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PublicDecks;
