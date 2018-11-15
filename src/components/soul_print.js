import React, { Component } from 'react';
import { connect } from 'react-redux';

const CANVAS_SIZE = '500',
      CENTER = CANVAS_SIZE / 2,
      RADIUS = CANVAS_SIZE / 2;

const CIRCLE_COLOR = 'black';

class SoulPrint extends Component {

  render() {
    console.log(this.props.soulPrint);
    return (
      <svg width={CANVAS_SIZE} height={CANVAS_SIZE} version="1.1" 
          xmlns="http://www.w3.org/2000/svg">
        <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke={CIRCLE_COLOR} 
            fill="transparent" strokeWidth="1"/>

        {
          // print region boundaries
          Object.keys(this.props.soulPrint).map(soulSectionName => {
            let offset = this.props.soulPrint[soulSectionName].offset;
            return (
              <line x1={CENTER} y1={CENTER} 
                    x2={this.polarToCartesian(offset, RADIUS).x + RADIUS}
                    y2={this.polarToCartesian(offset, RADIUS).y + RADIUS}
                    stroke="black" 
                    key={offset}
                    />
            );
          })
        }

        {
          Object.keys(this.props.soulPrint).map(soulSectionName => {
            let soulSection = this.props.soulPrint[soulSectionName];

            return [...soulSection.value].map(character => {
              let offset = soulSection.valueType === "date" 
                           ? this.numberOffset : this.letterOffset;

              let x = this.polarToCartesian(soulSection.offset + offset(character), RADIUS).x;
              let y = this.polarToCartesian(soulSection.offset + offset(character), RADIUS).y;
              return (
                <line x1={CENTER} y1={CENTER} x2={x + RADIUS} y2={y + RADIUS}
                      stroke="black" key={x + "" + y} />
              );
            })
          })
        }
      </svg>
    );
  }

  toRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  polarToCartesian(angle, r) {
    let x = r * Math.cos(this.toRadians(angle)); 
    let y = r * -Math.sin(this.toRadians(angle));
    return { x, y };
  }

  letterOffset(character) {
    return (((character.charCodeAt(0)-97)) * (80/26));
  }

  numberOffset(number) {
    return number * 10;
  }
}

function mapStateToProps(state) {
  return {
    soulPrint: state.soulPrint
  };
}

export default connect(mapStateToProps)(SoulPrint);
