import React from 'react';
import { withRouter, Link } from 'react-router';

class DeckPage extends React.Component {
  constructor(props) {
    super(props);
    this.cards = this.cards.bind(this);
  }

  componentDidMount() {
    this.props.requestDeck(this.props.location);
  }

  cards() {
    return this.props.deck.cards.map( (card, idx) => {
      return(
        <li key={idx}>
          <span className="cancel">X</span>
          <p>{card.item}</p>
          <p>{card.answer}</p>
        </li>
      );
    });
  }

  render() {
    if (this.props.deck) {
      return(
        <div className="deck-detail">
          <div>
            <h2>{this.props.deck.name}</h2>
            <h4>{this.props.deck.description}</h4>
            <ul className="deck-nav">
              <li><a>Edit Deck</a></li>
              <li><a>Add Cards</a></li>
              <li><Link to={`/deck/${this.props.deck.id}/review`}
                >Study</Link></li>
            </ul>
            <ul className="deck-cards">
              {this.cards()}
            </ul>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default withRouter(DeckPage);
