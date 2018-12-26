import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFirstName,
         updateFirstNameLineColor,
         updateFirstNameCircleColor,
         updateLastName,
         updateLastNameLineColor,
         updateLastNameCircleColor,
         updateDateOfBirth,
         updateDateOfBirthLineColor,
         updateDateOfBirthCircleColor,
         updateDateOfPassing,
         updateDateOfPassingLineColor,
         updateDateOfPassingCircleColor
} from '../actions/soul_print';

class Form extends Component {
  render() {
    return (

      <table>
        <tbody>
          <tr>
            <th>Text</th>
            <th>Line Color</th>
            <th>Circle Color</th>
          </tr>

          <tr>
            <td>
              <input type="text" value={this.props.firstName} onChange={(e) => this.props.updateFirstName(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.firstNameLineColor} onChange={(e) => this.props.updateFirstNameLineColor(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.firstNameCircleColor} onChange={(e) => this.props.updateFirstNameCircleColor(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <input type="text" value={this.props.lastName} onChange={(e) => this.props.updateLastName(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.lastNameLineColor} onChange={(e) => this.props.updateLastNameLineColor(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.lastNameCircleColor} onChange={(e) => this.props.updateLastNameCircleColor(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <input type="text" value={this.props.dateOfBirth} onChange={(e) => this.props.updateDateOfBirth(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.dateOfBirthLineColor} onChange={(e) => this.props.updateDateOfBirthLineColor(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.dateOfBirthCircleColor} onChange={(e) => this.props.updateDateOfBirthCircleColor(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <input type="text" value={this.props.dateOfPassing} onChange={(e) => this.props.updateDateOfPassing(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.dateOfPassingLineColor} onChange={(e) => this.props.updateDateOfPassingLineColor(e.target.value)} />
            </td>
            <td>
              <input type="color" value={this.props.dateOfPassingCircleColor} onChange={(e) => this.props.updateDateOfPassingCircleColor(e.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>

    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
    { updateFirstName,
      updateFirstNameLineColor,
      updateFirstNameCircleColor,
      updateLastName,
      updateLastNameLineColor,
      updateLastNameCircleColor,
      updateDateOfBirth,
      updateDateOfBirthLineColor,
      updateDateOfBirthCircleColor,
      updateDateOfPassing,
      updateDateOfPassingLineColor,
      updateDateOfPassingCircleColor
    }, dispatch);
}

function mapStateToProps(state) {
  return {
    soulPrint: state.soulPrint
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
