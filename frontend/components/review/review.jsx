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
    if (nextProps.deck !== this.props.deck && !this.state.cards.length ) {
      const cards = nextProps.deck.cards.filter( (card) => {
        if (card.grade < 1.6) {
          return card;
        }
      });
      this.setState({ cards });
    }
  }

  componentDidUpdate() {
    if (this.state.cards.length < 1) {
      hashHistory.push('/deck');
    }
  }

  shuffleCards(deck) {
    if (deck) {
      return shuffle(deck.cards);
    } else {
      return null;
    }
  }

  updateCard(grade) {
    return (e) => {
      this.state.cards[0].grade = grade;
      this.props.updateCard(this.state.cards[0]);
      this.setState({
        cards: this.state.cards.slice(1)
      });
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
                    onClick={this.updateCard(0.1)}
                    >What?</button>
            <button className="fail"
                    onClick={this.updateCard(0.5)}
                    >Challenge</button>
            <button className="fail"
                    onClick={this.updateCard(1)}
                    >Not Hard</button>
            <button className="pass"
                    onClick={this.updateCard(2)}
                    >Easy</button>
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
