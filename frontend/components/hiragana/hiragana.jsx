import React from 'react';

class Hiragana extends React.Component {
  constructor(props) {
    super(props);
    this.getGroupings = this.getGroupings.bind(this);
    this.createGrid = this.createGrid.bind(this);
    this.createGridItems = this.createGridItems.bind(this);
  }

  componentDidMount() {
    console.log(this.props.hiragana);
    this.props.requestAllHiragana();
  }

  getGroupings() {
    const groupings = Object.keys(this.props.hiragana);
    return groupings.map( (group) => {
      return this.props.hiragana[group];
    });
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

  createPhonetics() {
    const groupings = this.getGroupings();
    return groupings.map( (group, idx) => {
      return(
        <ul key={idx}>
          {this.createAnswerItems(group)}
        </ul>
      )
    })
  }

  createAnswerItems(group) {
    return group.map( (kana, idx) => {
      return <li key={idx}>{kana.syllable}</li>
    })
  }

  createGridItems(group) {
    return group.map( (kana, idx) => {
      return <li key={idx}>{kana.kana}</li>
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
    return(
      <ul className="group-axis">
        <li></li>
        <li>K</li>
        <li>S</li>
        <li>T</li>
        <li>Y</li>
        <li>N</li>
        <li>H</li>
        <li>M</li>
        <li>R</li>
        <li></li>
      </ul>
    )
  }

  render() {
    return(
      <div className="grids">
        {this.groupAxis()}
        <div className="kana-grid">
          {this.phoneticAxis()}
          {this.createGrid()}
          <div className="kana-grid phonetics">
            {this.phoneticAxis()}
            {this.createPhonetics()}
          </div>
        </div>
      </div>
    )
  }
}

export default Hiragana;
