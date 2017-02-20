import React from 'react';
import shuffle from 'shuffle-array';
import { withRouter, hashHistory } from 'react-router';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    this.props.requestDeck(this.props.deckId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deck !== this.props.deck) {
      this.setState({
        cards: shuffle(nextProps.deck.cards),
      });
    }
  }

  shuffleCards(deck) {
    if (deck) {
      return shuffle(deck.cards);
    } else {
      return null;
    }
  }

  failCard(e) {
    if (this.state.cards.length > 1) {
      this.setState({
        cards: this.state.cards.slice(1)
      });
    } else {
      hashHistory.push('/deck');
    }
  }

  persistCard(e) {
    if (this.state.cards.length > 1) {
      this.setState({
        cards: this.state.cards.slice(1)
      });
    } else {
      hashHistory.push('/deck');
    }
  }

  passCard(e) {
    if (this.state.cards.length > 1) {
      this.setState({
        cards: this.state.cards.slice(1)
      });
    } else {
      hashHistory.push(`/deck`);
    }
  }

  showAnswer(card) {
    return (e) => {
      e.currentTarget.textContent = card.answer;
    }
  }

  showItem(card) {
    return (e) => {
      e.currentTarget.textContent = card.item;
    }
  }

  render() {
    if (this.props.deck && this.state.cards[0]) {
      return(
        <div className="review">
          <div  className="review-item"
                onMouseEnter={this.showAnswer(this.state.cards[0])}
                onMouseLeave={this.showItem(this.state.cards[0])}>
                {this.state.cards[0].item}
          </div>
          <div className="review-nav">
            <button className="fail"
                    onClick={this.failCard.bind(this)}
                    >×</button>
            <button onClick={this.persistCard.bind(this)}>~</button>
            <button className="pass"
                    onClick={this.passCard.bind(this)}
                    >○</button>
          </div>
        </div>
      );
    } else {
      return(
        <div />
      );
    }
  }
}

export default withRouter(Review);
