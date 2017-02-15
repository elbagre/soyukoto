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
      description: ""
    };

    this.style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0, 0, 0, 0.1)',
        zIndex          : 10
      },
      content : {
        opacity         : 1,
        backgroundColor : '#fff',
        position        : 'fixed',
        top             : '20%',
        height          : '255px',
        width           : '600px',
        margin          : '0 auto',
        bottom          : '0',
        border          : '3px solid #aaa',
        padding         : '20px',
        zIndex          : 11
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modalOpen: nextProps.modalOpen })
  }

  handleChange(type) {
    return (e) => {
      if (type === "name") {
        this.setState({
          name: e.currentTarget.value
        });
      } else {
        this.setState({
          description: e.currentTarget.value
        });
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDeck({
      user_id: this.props.currentUser.id,
      name: this.state.name
    });
  }

  render() {
    return(
      <Modal isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        style={this.style}
        contentLabel="NewDeckModal">
        <div className="deck-create">
          <form className="deck-form" onSubmit={this.handleSubmit}>
            <h3>Create New Deck</h3>
            <label>Name
              <input type="text"
                onChange={this.handleChange("name")}
                value={this.state.name} />
            </label>
            <label>Description
              <input type="text"
                onChange={this.handleChange("description")}
                value={this.state.description} />
            </label>
           <input type="submit" value="Submit"/>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withRouter(NewDeckModal);
