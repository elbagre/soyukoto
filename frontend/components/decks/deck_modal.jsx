import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router'
import Modal from 'react-modal';

class DeckModal extends React.Component {
  constructor(props) {
    super(props);

    this.cards = this.cards.bind(this);

    this.state = {
      modalOpen: this.props.modalOpen,
    };

    this.style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0, 0, 0, 0.8)',
        zIndex          : 10
      },
      content : {
        opacity         : 1,
        backgroundColor : 'whitesmoke',
        position        : 'fixed',
        top             : '0',
        width           : '600px',
        margin          : '0 auto',
        bottom          : '0',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 11
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modalOpen: nextProps.modalOpen })
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
    return(
      <Modal isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        style={this.style}
        contentLabel="DecModal">
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
      </Modal>
    );
  }
}

export default withRouter(DeckModal);
