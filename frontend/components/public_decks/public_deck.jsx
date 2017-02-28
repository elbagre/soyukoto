import React from 'react';

class PublicDeck extends React.Component {
  constructor(props) {
    super(props);
    this.cards = this.cards.bind(this);
    this.createDeck = this.createDeck.bind(this);
  }

  componentDidMount() {
    this.props.requestPublicDeck(parseInt(this.props.routeParams.id));
  }

  componentWillUnmount() {
  }

  createDeck() {
    this.props.createDeck({
      name: this.props.publicDeck.name,
      description: this.props.publicDeck.description,
      cards: this.props.publicDeck.cards
    });
  }

  cards() {
    return this.props.publicDeck.cards.map( (card, idx) => {
      return(
        <li key={idx}>
          <p>{card.item}</p>
          <p>{card.answer}</p>
          <p>{card.item_type}</p>
        </li>
      );
    });
  }

  render() {
    return(
      <div className="public-deck-detail">
        <div className="deck-header">
          <div>
            <h2>{this.props.publicDeck.name}</h2>
            <h4>{this.props.publicDeck.description}</h4>
          </div>
          <button onClick={this.createDeck}>Get this Deck</button>
        </div>
        <div>
          <ul>
            <li><a>Front</a><a>Back</a><a>Class</a></li>
            {this.cards()}
          </ul>
        </div>
      </div>
    );
  }
}

export default PublicDeck;
