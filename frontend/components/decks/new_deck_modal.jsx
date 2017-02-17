import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router'
import Modal from 'react-modal';

class NewDeckModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      modalOpen: this.props.modalOpen,
      name: "",
      description: "",
      search: ""
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
      name: this.state.name
    });
  }

  Queries() {
    if (this.props.queryResults.length) {
      return this.props.queryResults.map( (query, idx) => {
        return (
          <li key={idx}>{query.item_type}: {query.transliteration}</li>
        )
      });
    } else {
      return(
        <li></li>
      )
    }
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
            <div>
              <input type="text" onChange={this.handleChange("search")} placeholder="Add Cards (optional)" value={this.state.search} />
              <ul>
                {this.Queries()}
              </ul>
            </div>
         </form>
        </div>
      </Modal>
    );
  }
}

export default withRouter(NewDeckModal);
