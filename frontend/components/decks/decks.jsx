import React from 'react';
import DeckModal from './deck_modal';

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.decks = this.decks.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalOpen: false,
      currentDeck: { title: "NULL", description: "", cards: [] }
    }
  }

  componentDidMount() {
    this.props.requestDecks();
  }

  openModal(deck) {
    return () => {
      this.setState({
        modalOpen: true,
        currentDeck: deck
      });
    };
  }

  closeModal() {
    this.setState({
      modalOpen: false,
      currentDeck: { title: "NULL", description: "", cards: [] }
    });
  }

  decks() {
    return this.props.decks.map( (deck, idx) => {
      return(
        <li key={idx} onClick={this.openModal(deck)}>
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
        <DeckModal modalOpen={this.state.modalOpen}
                   closeModal={this.closeModal}
                   deck={this.state.currentDeck}
                   />
      </div>
    )
  }
}

export default Decks;
