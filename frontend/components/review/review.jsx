import React from 'react';
import shuffle from 'shuffle-array';
import { withRouter, hashHistory } from 'react-router';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.reviewGrade = this.reviewGrade.bind(this);
    this.state = {
      cards: [],
      finished: false,
      score: 0,
      key: {
        0.1: 0,
        0.5: 0,
        1: 1,
        2: 1
      }
    }
  }

  componentDidMount() {
    this.props.requestDeck(this.props.deckId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deck !== this.props.deck && !this.state.cards.length ) {
      let cards = shuffle(nextProps.deck.cards);
      cards = cards.filter( (card) => {
        if (card.grade < 1.6) {
          return card;
        }
      });
      this.setState({ cards });
    }
  }

  componentDidUpdate() {
    if (this.state.cards.length < 1 && !this.state.finished) {
      this.setState({ finished: true });
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
        cards: this.state.cards.slice(1),
        score: this.state.score + this.state.key[grade]
      });
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

  reviewGrade() {
    // const percentScore = this.state.score /
    if (this.state.score > 8) {
      return "A";
    } else if (this.state.score > 7) {
      return "B";
    } else if (this.state.score > 6) {
      return "C";
    } else if (this.state.score > 5) {
      return "D";
    } else {
      return "F";
    }
  }

  render() {
    if (this.state.finished) {
      return(
        <div className="results">
          <h3>Results</h3>
          <p>{this.reviewGrade()}</p>
          <p>{this.state.score}/10</p>
        </div>
      );
    } else if (this.props.deck && this.state.cards[0]) {
      return(
        <div className="review">
          <div  className="review-item"
                onClick={this.showAnswer(this.state.cards[0])}
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
