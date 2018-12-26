import React, { Component } from 'react';
import { connect } from 'react-redux';

const CANVAS_SIZE = '600',
      CENTER = CANVAS_SIZE / 2,
      RADIUS = CANVAS_SIZE / 2,
      RADIUS_DIFFERENCE = 100,
      CIRCLE_RADIUS = CANVAS_SIZE / 2 - RADIUS_DIFFERENCE;

const CIRCLE_COLOR = 'black';

class SoulPrint extends Component {

  render() {
    return (
      <div id="soulprint">
        <svg width={CANVAS_SIZE} height={CANVAS_SIZE} version="1.1"
            xmlns="http://www.w3.org/2000/svg">
          <circle cx={CENTER} cy={CENTER} r={CIRCLE_RADIUS} stroke={CIRCLE_COLOR}
              fill="transparent" strokeWidth="1"/>

          {
            // print region boundaries
            // Object.keys(this.props.soulPrint).map(soulSectionName => {
            //   let offset = this.props.soulPrint[soulSectionName].offset;
            //   let cartesianCoords = this.polarToCartesian(offset, CIRCLE_RADIUS);
            //   return (
            //     <line x1={CENTER} y1={CENTER}
            //           x2={cartesianCoords.x + RADIUS}
            //           y2={cartesianCoords.y + RADIUS}
            //           stroke="black"
            //           key={offset}
            //           />
            //   );
            // })
          }

          {
            Object.keys(this.props.soulPrint).map(sectionName => {
              let soulSection = this.props.soulPrint[sectionName]; // one entry in the state object
              let coords = this.getCoordinates(soulSection);

              return coords.map((coordinate, idx) => {
                return (
                  <g key={coordinate.x2 + "" + coordinate.x2 + "" + idx}>
                    <line x1={coordinate.x1line} y1={coordinate.y1line}
                          x2={coordinate.x2line} y2={coordinate.y2line}
                          stroke={soulSection.lineColor} />
                    <circle cx={coordinate.x2circle} cy={coordinate.y2circle} r={5} stroke={soulSection.circleColor}
                            fill="transparent" strokeWidth="1"/>
                  </g>
                );
              })

            })
          }
        </svg>
      </div>

    );
  }

  getCoordinates(soulSection) {

    let valueSliceFunction = soulSection.valueType === "date"
                   ? this.dateSliceFunction : this.letterSliceFunction;

    let offsetFunction = soulSection.valueType === "date"
                   ? this.numberOffset : this.letterOffset;

    return valueSliceFunction(soulSection.value).map((section, idx) => {
      let lineCartesianCoords = this.polarToCartesian(soulSection.offset + offsetFunction(section),
          CIRCLE_RADIUS + this.smallRandomInt())
      let circleCartesianCoords = this.polarToCartesian(soulSection.offset + offsetFunction(section),
          CIRCLE_RADIUS)
      return (
        {
          x1line: CENTER, y1line: CENTER, x2line: lineCartesianCoords.x + RADIUS, y2line: lineCartesianCoords.y + RADIUS,
          x1circle: CENTER, y1line: CENTER, x2circle: circleCartesianCoords.x + RADIUS, y2circle: circleCartesianCoords.y + RADIUS
        }
      );
    })
  }

  dateSliceFunction(dateStr) {
    // turn a list of character into a list of list of characters of length 2
    var result = [];
    var temp = [];
    var sectionSize = 2;
    for (var i = 0; i < dateStr.length; i++) {
      temp.push(dateStr[i]);
      if (temp.length === sectionSize) {

        let concatStr = "";
        for (var j = 0; j < temp.length; j++) {
          concatStr = concatStr + temp[j];
        }

        result.push(concatStr);
        temp = [];
      }
    }
    return result;
  }

  letterSliceFunction(str) {
    return str.split("");
  }

  smallRandomInt() {
    return Math.random() * RADIUS_DIFFERENCE;
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
    return parseInt(number);
  }
}

function mapStateToProps(state) {
  return {
    soulPrint: state.soulPrint
  };
}

export default connect(mapStateToProps)(SoulPrint);
