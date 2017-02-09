import React from 'react';
import { hashHistory } from 'react-router';
// import DeckModal from './deck_modal';
// import NewDeckModal from './new_deck_modal';

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.decks = this.decks.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.closeCreateModal = this.closeCreateModal.bind(this);
    this.openDeck = this.openDeck.bind(this);

    this.state = {
      modalOpen: false,
      createModalOpen: false,
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

  openCreateModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
      currentDeck: { title: "NULL", description: "", cards: [] }
    });
  }

  closeCreateModal() {
    this.setState({
      createModalOpen: false,
      currentDeck: this.props.currentDeck
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
            <a onClick={this.openCreateModal}>New Deck</a>
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

// <DeckModal modalOpen={this.state.modalOpen}
//            closeModal={this.closeModal}
//            deck={this.state.currentDeck}
//            />
// <NewDeckModal modalOpen={this.state.createModalOpen}
//               closeModal={this.closeCreateModal} />
