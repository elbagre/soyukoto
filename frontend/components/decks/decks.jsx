import React from 'react';
import { hashHistory, Link } from 'react-router';

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.decks = this.decks.bind(this);
    this.openDeck = this.openDeck.bind(this);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.requestDecks();
  }

  openDeck(deck) {
    return () => {
      hashHistory.push(`/deck/${deck.id}`);
    }
  }

  decks() {
    return this.props.decks.map( (deck, idx) => {
      if (!deck.cards.length) {
        return(
          <li key={idx} onClick={this.openDeck(deck)}>
            <h4>{deck.name}</h4>
            <p>∅</p>
          </li>
        );
      } else {
        return(
          <li key={idx} onClick={this.openDeck(deck)}>
            <h4>{deck.name}</h4>
            <p>{deck.cards[0].item}</p>
          </li>
        );
      }
    });
  }

  render() {
    return(
      <div className="decks">
        <h1>Flashcards</h1>
        <div className="decks-container">
          <div className="decks-nav">
            <h3>Decks</h3>
            <Link to="/deck/new">New Deck+</Link>
          </div>
          <ul className="decks-list">
            {this.decks()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Decks;

// <NewDeckModal modalOpen={this.state.modalOpen}
//   requestMatches={this.props.requestMatches}
//   clearMatches={this.props.clearMatches}
//   queryResults={this.props.queryResults}
//   createDeck={this.props.createDeck}
//   closeModal={this.closeModal} />
