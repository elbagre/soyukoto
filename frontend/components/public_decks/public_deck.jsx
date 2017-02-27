import React from 'react';

class PublicDeck extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPublicDeck(this.props.location);
  }

  render() {
    return(
      <div className="public-deck-detail">
        <div className="deck-header">
          <div>
            <h2>{this.props.publicDeck.name}</h2>
            <h4>{this.props.publicDeck.description}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicDeck;
