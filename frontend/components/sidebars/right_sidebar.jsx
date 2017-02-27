import React from 'react';
import { withRouter } from 'react-router';

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "hidden",
      routes: {
        'hiragana': ['ひらがな', 'Hiragana'],
        'katakana': ['カタカナ', 'Katakana'],
        'deck': ['勉強', 'Study'],
        'public': ['探索', 'Explore']
      }
    }
  }

  componentDidMount() {
    this.setClass(this.props);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setClass(nextProps);
    }
  }

  setClass(props) {
    if (this.state.routes[props.location]) {
      this.setState({ className: "sidebar" });
    } else {
      this.setState({ className: "hidden"});
    }
  }

  render() {
    if (this.state.className === "sidebar" && this.state.routes[this.props.location]) {
      return(
        <div className={this.state.className}>
          <ul>
            <li>{this.state.routes[this.props.location][0]}</li>
            <li>{this.state.routes[this.props.location][1]}</li>
          </ul>
        </div>
      );
    } else {
      return(
        <div className="sidebar"></div>
      );
    }
  }
}

export default withRouter(RightSidebar);
