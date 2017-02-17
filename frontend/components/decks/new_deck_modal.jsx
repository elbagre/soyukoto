import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router'
import Modal from 'react-modal';

class NewDeckModal extends React.Component {
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
      modalOpen: this.props.modalOpen,
      name: "",
      description: "",
      search: "",
      cards: []
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
        backgroundColor : '#fff',
        position        : 'fixed',
        top             : '0',
        height          : '100vh',
        width           : '600px',
        margin          : '0 auto',
        bottom          : '0',
        border          : '1px solid #aaa',
        padding         : '20px',
        zIndex          : 11
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modalOpen: nextProps.modalOpen });
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
    this.props.createDeck({
      user_id: this.props.currentUser.id,
      name: this.state.name,
      description: this.state.description,
      cards: this.state.cards
    });
    this.clearModal();
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

  clearModal() {
    this.setState({
      name: "",
      description: "",
      cards: [],
      modalOpen: false
    });

    this.props.closeModal();
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
        <li key={idx}><p>{card.transliteration}</p><p>{card.translation}</p></li>
      );
    })
  }

  render() {
    return(
      <Modal isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        style={this.style}
        contentLabel="NewDeckModal">
        <div className="deck-create">
          <form className="deck-form" onSubmit={this.handleSubmit}>
            <div>
              <h3>Create New Deck</h3>
              <input type="submit" value="Submit"/>
            </div>
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
      </Modal>
    );
  }
}

export default withRouter(NewDeckModal);
