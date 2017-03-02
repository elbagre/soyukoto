import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class NewDeck extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.queries = this.queries.bind(this);
    this.addCard = this.addCard.bind(this);
    this.cards = this.cards.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.state = {
      focused: "hidden",
      name: "",
      description: "",
      search: "",
      cards: []
    };
  }

  handleChange(type) {
    return (e) => {
      if (type === "name") {
        this.setState({
          name: e.currentTarget.value
        });
      } else if (type === "search") {
        this.props.requestMatches(e.currentTarget.value);
        this.setState({
          search: e.currentTarget.value
        });
      } else {
        this.setState({
          description: e.currentTarget.value
        });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.location === 'deck') {
      this.props.createDeck({
        name: this.state.name,
        description: this.state.description,
        cards: this.state.cards
      });
    } else {
      this.props.createPublicDeck({
        name: this.state.name,
        description: this.state.description,
        cards: this.state.cards
      });
    }
  }

  handleFocus(phase) {
    return () => {
      if (phase === "in") {
        this.setState({
          focused: "search-queries"
        });
      } else {
        this.setState({
          focused: "hidden"
        });
      }
    }
  }

  addCard(card) {
    return () => {
      if (this.state.cards.indexOf(card) === -1) {
        this.setState({
            cards: this.state.cards.concat([card])
          });
      }
    };
  }

  removeCard(card) {
    return () => {
      const newCards = this.state.cards.filter((el) => {
        if (el !== card) {
          return el;
        }
      });

      this.setState({
        cards: newCards
      });
    }
  }

  queries() {
    if (this.props.queryResults.length) {
      return this.props.queryResults.map( (query, idx) => {
        return (
          <li key={idx} onClick={this.addCard(query)}>
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
    return this.state.cards.map( (card, idx) => {
      return(
        <li key={idx}>
          <span className="cancel" onClick={this.removeCard(card)}>╳</span>
          <p>{card.translation}</p>
          <p>{card.transliteration}</p>
        </li>
      );
    })
  }

  render() {
    return(
      <div className="deck-create">
        <form className="deck-form" onSubmit={this.handleSubmit}>
          <div className="section-header">
            <h2>New Deck</h2>
            <input type="submit" value="Submit"/>
          </div>
          <div className="inputs">
            <div>
              <label>Name</label>
              <input type="text"
                onChange={this.handleChange("name")}
                value={this.state.name} />
            </div>
            <div>
              <label>Description</label>
              <input type="text"
                onChange={this.handleChange("description")}
                value={this.state.description} />
            </div>
          </div>
          <div className="card-search">
            <input type="text"
                   onChange={this.handleChange("search")}
                   placeholder="Add Cards (optional)"
                   onFocus={this.handleFocus("in")}
                   value={this.state.search} />
            <ul className={this.state.focused}>
              {this.queries()}
            </ul>
          </div>
       </form>
       <ul className="deck-cards">
         {this.cards()}
       </ul>
      </div>
    );
  }
}

export default withRouter(NewDeck);
