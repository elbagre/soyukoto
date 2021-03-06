import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
// Components
import DeckGraph from '../graphs/deck_graph';
import RecapGraph from '../graphs/recap_graph';

class DeckPage extends React.Component {
  constructor(props) {
    super(props);
    this.cards = this.cards.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.destroyCard = this.destroyCard.bind(this);
    this.destroyDeck = this.destroyDeck.bind(this);
    this.queries = this.queries.bind(this);
    this.createCard = this.createCard.bind(this);
    this.reset = this.reset.bind(this);
    this.averageScore = this.averageScore.bind(this);
    this.totals = this.totals.bind(this);
    this.state = {
      search: "",
      focused: "hidden"
    }
  }

  componentDidMount() {
    this.props.requestDeck(this.props.location);
  }

  componentWillUnmount() {
    this.props.receiveDeck(null);
  }

  handleChange(e) {
    this.props.requestMatches(e.currentTarget.value);
    this.setState({
      search: e.currentTarget.value
    });
  }

  handleFocus() {
    this.setState({
      focused: "search-queries"
    })
  }

  reset() {
    this.props.resetDeck(this.props.deck.id);
  }

  createCard(card) {
    return () => {
      this.props.createCard({
        deck_id: this.props.deck.id,
        item_type: card.item_type,
        item_id: card.item_id
      });
    }
  }

  destroyCard(id) {
    return () => {
      this.props.destroyCard(id);
    };
  }

  destroyDeck() {
    this.props.destroyDeck(this.props.deck.id);
  }

  queries() {
    if (this.props.queryResults.length) {
      return this.props.queryResults.map( (query, idx) => {
        return (
          <li key={idx} onClick={this.createCard(query)}>
            <p>{query.item_type}</p>
            <p>{query.transliteration}</p>
            <p>{query.translation}</p>
          </li>
        )
      });
    } else {
      return(
        <span></span>
      )
    }
  }

  totals() {
    const counts = {
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'F': 0
    }

    this.props.deck.cards.forEach( (card) => {
      if (card.grade >= 90) counts['A'] += 1;
      else if (card.grade >= 80) counts['B'] += 1;
      else if (card.grade >= 70) counts['C'] += 1;
      else if (card.grade >= 60) counts['D'] += 1;
      else counts['F'] += 1;
    });

    return [counts['F'], counts['D'], counts['C'], counts['B'], counts['A']];
  }

  cards() {
    if (this.props.deck.cards) {
      return this.props.deck.cards.map( (card, idx) => {
        return(
          <li key={idx}>
            <span className="cancel" onClick={this.destroyCard(card.id)}>╳</span>
            <p>{card.item}</p>
            <p>{card.answer}</p>
          </li>
        );
      });
    }
  }

  averageScore() {
    const average = this.props.deck.cards.reduce( (average, card) => {
      return average + card.grade;
    }, 0);
      return Math.floor(average / this.props.deck.cards.length);
  }

  render() {
    if (this.props.deck) {
      return(
        <div className="deck-detail">
          <div className="deck-header">
            <div>
              <h2>{this.props.deck.name}</h2>
              <h4>{this.props.deck.description}</h4>
            </div>
            <ul className="deck-nav">
              <li><Link to={`/deck/${this.props.deck.id}/edit`}>Edit</Link></li>
              <li><a onClick={this.reset}>Reset</a></li>
              <li><Link to={`/deck/${this.props.deck.id}/review`}
                >Study</Link></li>
              <li><a onClick={this.destroyDeck}>Delete</a></li>
            </ul>
          </div>
          <div className="deck-search">
            <input type="text"
              className="deck-search"
              onChange={this.handleChange}
              placeholder="Add Cards"
              onFocus={this.handleFocus}
              value={this.state.search} />
            <ul className="search-queries">
              {this.queries()}
            </ul>
          </div>
          <div className="stats">
            <h2>Deck Stats</h2>
            <div className="deck-graphs">
              <DeckGraph totals={this.totals()}/>
              <RecapGraph percentage={this.averageScore()} />
            </div>
          </div>
          <div className="cards">
            <h2>Cards</h2>
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
