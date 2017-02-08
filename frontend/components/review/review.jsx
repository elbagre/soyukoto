import React from 'react';
import { withRouter } from 'react-router';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestDeck(this.props.location);
  }

  render() {
    if (this.props.deck) {
      return(
        <div className="review">
          <h1>{this.props.deck.id}</h1>
        </div>
      );
    } else {
      return(
        <div />
      );
    }
  }
}

export default withRouter(Review);
