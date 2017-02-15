import React from 'react';
import { hashHistory } from 'react-router';
// import DeckModal from './deck_modal';
import NewDeckModal from './new_deck_modal';

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.decks = this.decks.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openDeck = this.openDeck.bind(this);

    this.state = {
      modalOpen: false,
    }
  }

  componentDidMount() {
    this.props.requestDecks();
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  openDeck(deck) {
    return () => {
      hashHistory.push(`/deck/${deck.id}`);
    }
  }

  decks() {
    return this.props.decks.map( (deck, idx) => {
      return(
        <li key={idx} onClick={this.openDeck(deck)}>
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
          <div className="decks-nav">
            <h3>Decks</h3>
            <a onClick={this.openModal}>New Deck</a>
          </div>
          <ul className="decks-list">
            {this.decks()}
          </ul>
        </div>
        <NewDeckModal modalOpen={this.state.modalOpen}
                      closeModal={this.closeModal} />
      </div>
    )
  }
}

export default Decks;

// <DeckModal modalOpen={this.state.modalOpen}
//            closeModal={this.closeModal}
//            deck={this.state.currentDeck}
//            />
