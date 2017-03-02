import React from 'react';
import * as Util from './util';

class DeckGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: [1, 2, 3, 4, 5],
      labels: ['F', 'D', 'C', 'B', 'A']
    }
  }

  bars() {
    const max = Math.max.apply(Math, this.props.totals);

    if (max === 0) {
      return [4, 4, 4, 4, 4];
    } else {
      return this.props.totals.map( (total, idx) => {
        return (
          <li key={idx}>
            <p>{total}</p>
            <span style={{ height: (total / max * 80) + "%" }} />
            <p>{this.state.labels[idx]}</p>
          </li>
        );
      });
    }
  }

  render() {
    return(
      <ul className="bar-graph">
        {this.bars()}
      </ul>
    );
  }
}

export default DeckGraph;
