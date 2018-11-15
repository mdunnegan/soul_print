import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFirstName,
         updateLastName,
         updateDateOfBirth,
         updateDateOfPassing
} from '../actions/soul_print';

class Form extends Component {
  render() {
    return (
      <div>
      	<span>First name:</span>
      	<input type="text" value={this.props.firstName}
      			onChange={(e) => this.props.updateFirstName(e.target.value)} />

        <span>Last name:</span>
        <input type="text" value={this.props.lastName}
            onChange={(e) => this.props.updateLastName(e.target.value)} />

        <span>Date of birth:</span>
        <input type="text" value={this.props.dateOfBirth}
            onChange={(e) => this.props.updateDateOfBirth(e.target.value)} />

        <span>Date of passing:</span>
        <input type="text" value={this.props.dateOfPassing}
            onChange={(e) => this.props.updateDateOfPassing(e.target.value)} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
    { updateFirstName,
      updateLastName,
      updateDateOfBirth,
      updateDateOfPassing
    }, dispatch);
}

function mapStateToProps(state) {
  return {
    soulPrint: state.soulPrint
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
