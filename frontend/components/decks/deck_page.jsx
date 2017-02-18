import React from 'react';
import { withRouter, Link } from 'react-router';

class DeckPage extends React.Component {
  constructor(props) {
    super(props);
    this.cards = this.cards.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.queries = this.queries.bind(this);
    this.state = {
      search: "",
      focused: "hidden"
    }
  }

  componentDidMount() {
    this.props.requestDeck(this.props.location);
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

  cards() {
    return this.props.deck.cards.map( (card, idx) => {
      return(
        <li key={idx}>
          <span className="cancel">╳</span>
          <p>{card.item}</p>
          <p>{card.answer}</p>
        </li>
      );
    });
  }

  render() {
    if (this.props.deck) {
      return(
        <div className="deck-detail">
          <div>
            <h2>{this.props.deck.name}</h2>
            <h4>{this.props.deck.description}</h4>
            <ul className="deck-nav">
              <li><a>Edit Deck</a></li>
                <li>
                  <input type="text"
                           className="deck-search"
                           onChange={this.handleChange}
                           placeholder="Add Cards"
                           onFocus={this.handleFocus}
                           value={this.state.search} />
                   <ul>
                     {this.queries()}
                   </ul>
                  </li>
                <li><Link to={`/deck/${this.props.deck.id}/review`}
                >Study</Link></li>
            </ul>
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
