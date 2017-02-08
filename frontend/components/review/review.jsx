import React from 'react';
import { withRouter } from 'react-router';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="review">
        <h1>Review</h1>
      </div>
    )
  }
}

export default withRouter(Review);
