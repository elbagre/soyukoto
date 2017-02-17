import React from 'react';
import KatakanaModal from './katakana_modal';

class Katakana extends React.Component {
  constructor(props) {
    super(props);
    this.getGroupings = this.getGroupings.bind(this);
    this.createGrid = this.createGrid.bind(this);
    this.createGridItems = this.createGridItems.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeKana = this.changeKana.bind(this);


    this.state = {
      modalOpen: false,
      targetKana: "",
      currentKana: "Variants"
    }
  }

  componentDidMount() {
    if (!this.props.baseKatakana.length) {
      this.props.requestAllKatakana();
    }
  }

  showEnglish(kana) {
    return (e) => {
      e.currentTarget.textContent = kana.syllable;
      e.currentTarget.className = "english";
    }
  }

  showKana(kana) {
    return (e) => {
      e.currentTarget.textContent = kana.kana;
    }
  }

  changeKana() {
    console.log(this.state.modalOpen);
    if (this.state.currentKana === "Variants") {
      this.setState({ currentKana: "Base" });
    } else {
      this.setState({ currentKana: "Variants" });
    }
  }

  openModal(kana) {
    if (kana.kana !== " ") {
      return () => {
        this.setState({
          modalOpen: true,
          targetKana: kana
        });
      }
    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  getGroupings() {
    if (this.state.currentKana === "Variants") {
      const groupings = Object.keys(this.props.baseKatakana);
      return groupings.map( (group) => {
        return this.props.baseKatakana[group];
      });
    } else {
      const groupings = Object.keys(this.props.variantKatakana);
      return groupings.map( (group) => {
        return this.props.variantKatakana[group];
      });
    }
  }

  createGrid() {
    const groupings = this.getGroupings();
    return groupings.map( (group, idx) => {
      return(
        <ul key={idx}>
          {this.createGridItems(group)}
        </ul>
      )
    });
  }

  createGridItems(group) {
    return group.map( (kana, idx) => {
      return <li key={idx}
                 onMouseEnter={this.showEnglish(kana)}
                 onMouseLeave={this.showKana(kana)}
                 onClick={this.openModal(kana)}
                 >{kana.kana}</li>
    })
  }

  phoneticAxis() {
    return(
      <ul>
        <li>A</li>
        <li>I</li>
        <li>U</li>
        <li>E</li>
        <li>O</li>
      </ul>
    )
  }

  groupAxis() {
    if (this.state.currentKana === "Variants") {
      return(
        <ul className="group-axis">
          <li>∅</li>
          <li>K</li>
          <li>S</li>
          <li>T</li>
          <li>N</li>
          <li>H</li>
          <li>M</li>
          <li>R</li>
          <li>Y</li>
          <li>W</li>
        </ul>
      );
    } else {
      return(
        <ul className="group-axis">
          <li>K</li>
          <li>G</li>
          <li>S</li>
          <li>Z</li>
          <li>T</li>
          <li>D</li>
          <li>H</li>
          <li>B</li>
          <li>P</li>
        </ul>
      );
    }
  }

  render() {
    return(
      <div className="grids">
        <div className="table">
          {this.groupAxis()}
          <div className="kana-grid">
            {this.phoneticAxis()}
            {this.createGrid()}
          </div>
        </div>
        <button onClick={this.changeKana}>{this.state.currentKana}</button>
        <KatakanaModal modalOpen={this.state.modalOpen}
                       closeModal={this.closeModal}
                       katakana={this.state.targetKana} />
      </div>
    )
  }
}

export default Katakana;
