import React from 'react';

class GuestButton extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.login({
      username: "guest",
      password: "guests"
    });
  }

  render () {
    return (
    <button className="guest" onClick={this.handleClick}>Guest</button>
    );
  }
}

export default GuestButton;
