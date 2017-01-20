import React from 'react';
import { withRouter } from 'react-router';

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.title.bind(this);
  }

  title() {
    if (this.props.location === "home") {
      return(
        <div>
          <ul>
            <li>ひらがな</li>
            <li>{"Hiragana"}</li>
          </ul>
        </div>
      );
    } else if (this.props.location === "katakana") {
      return (
        <div>
          <ul>
            <li>カタカナ</li>
            <li>{"Katakana"}</li>
          </ul>
        </div>
      );
    } else if (this.props.location === "deck") {
      return (
        <div>
          <ul>
            <li>勉強</li>
            <li>{"Study"}</li>
          </ul>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="sidebar">
        {this.title()}
      </div>
    )
  }
}

export default withRouter(RightSidebar);
