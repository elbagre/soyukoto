import React from 'react';
import shuffle from 'shuffle-array';
import { withRouter, hashHistory, Link } from 'react-router';
// Components
import RecapGraph from '../graphs/recap_graph';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.reviewGrade = this.reviewGrade.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      cards: [],
      finished: false,
      score: 0,
      key: {
        0: 0,
        40: 0.5,
        80: 1,
        100: 1
      }
    }
  }

  componentDidMount() {
    this.props.requestDeck(this.props.deckId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deck !== this.props.deck && !this.state.cards.length ) {
      let cards = shuffle(nextProps.deck.cards);
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

  reset() {
    this.setState({
      finished: false,
      cards: shuffle(this.props.deck.cards),
      score: 0
    });
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
          <div>
            <h3>Results</h3>
            <RecapGraph percentage={Math.floor(this.state.score / this.props.deck.cards.length * 100)}/>
          </div>
          <div className="review-nav">
            <Link to="/deck">Home</Link>
            <Link to={`/deck/${this.props.deckId}`}>Deck</Link>
            <button onClick={this.reset}>Again</button>
          </div>
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
                    onClick={this.updateCard(0)}
                    >Pass</button>
            <button className="fail"
                    onClick={this.updateCard(40)}
                    >Hard</button>
            <button className="fail"
                    onClick={this.updateCard(80)}
                    >OK</button>
            <button className="pass"
                    onClick={this.updateCard(100)}
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
