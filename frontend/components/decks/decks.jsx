import React from 'react';

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.decks = this.decks.bind(this);
  }

  componentDidMount() {
    this.props.requestDecks();
  }

  decks() {
    return this.props.decks.map( (deck, idx) => {
      console.log(deck.cards);
      return(
        <li key={idx}>
          <h4>{deck.name}</h4>
          <p>{deck.cards[0].item}</p>
        </li>
      );
    });
  }

  render() {
    return(
      <div className="decks">
        <h1>Flashcards</h1>
        <div className="decks-container">
          <h3>Decks</h3>
          <ul className="decks-list">
            {this.decks()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Decks;
