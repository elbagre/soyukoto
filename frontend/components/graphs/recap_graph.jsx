import React from 'react';
import * as Util from './util';

class RecapGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.draw();
  }

  drawText(ctx, percentage) {
    if (percentage === 100) {
      ctx.fillText(`${percentage}%`, 220, 400);
    } else {
      ctx.fillText(` ${percentage}%`, 220, 400);
    }
  }

  draw() {
    const ctx = this.refs.canvas.getContext('2d');
    const percentage = this.props.percentage;
    const angle = (2 * Math.PI * percentage / 100) - 0.5 * Math.PI;
    ctx.lineWidth = 55;
    ctx.strokeStyle = '#F5F5F5';
    ctx.beginPath();
    ctx.arc(300,300,200,0,2*Math.PI);
    ctx.stroke();

    ctx.lineWidth = 55;
    ctx.strokeStyle = Util.colorByPercentage(percentage);
    ctx.beginPath();
    ctx.arc(300,300,200,-0.5 * Math.PI,angle);
    ctx.stroke();

    ctx.fillStyle = Util.colorByPercentage(percentage);
    ctx.font = '150px Sans Serif';
    ctx.fillText(Util.gradeByPercentage(percentage), 250, 300);

    ctx.font = '80px Sans Serif';
    this.drawText(ctx, percentage)
  }

  render() {
    return(
      <canvas className="canvas-graph" ref="canvas" width={600} height={600} />
    )
  }
}

export default RecapGraph;
