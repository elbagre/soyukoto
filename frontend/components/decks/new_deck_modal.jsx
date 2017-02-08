import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router'
import Modal from 'react-modal';

class NewDeckModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: this.props.modalOpen,
      name: ""
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
        backgroundColor : 'whitesmoke',
        position        : 'fixed',
        top             : '0',
        width           : '600px',
        margin          : '0 auto',
        bottom          : '0',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 11
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modalOpen: nextProps.modalOpen })
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
          <form>
            <label>Deck Name</label>
            <input type="text">{this.state.name}</input>
            <input type="submit"
                   onClick={this.handleCreate}
                   >Create Deck</input>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withRouter(NewDeckModal);
