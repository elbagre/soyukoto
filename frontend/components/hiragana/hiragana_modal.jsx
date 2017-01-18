import React from 'react';
import Modal from 'react-modal';

class HiraganaModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen,
      kana: ""
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

  render() {
    return(
      <Modal isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        style={this.style}
        contentLabel="HiraganaModal">
        <div className="hiragana-detail">
          <div>
            <p>{this.props.hiragana.kana}</p>
            <p>{this.props.hiragana.syllable}</p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default HiraganaModal;
