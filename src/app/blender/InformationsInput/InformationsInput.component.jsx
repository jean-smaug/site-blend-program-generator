import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as formActions from '../blender.action';

/**
 * Component for get information's user
 */

export class InformationsInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.informations;
  }

  handleChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      this.props.addInformations(this.state);
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChangeInput} type="text" name="firstname" value={this.props.informations.firstname} placeholder="Prénom"/>
        <input onChange={this.handleChangeInput} type="text" name="lastname" value={this.props.informations.lastname} placeholder="Nom"/>
        <input onChange={this.handleChangeInput} type="email"name="email"value={this.props.informations.email} placeholder="Email"/>
      </div>
    );
  }
}

InformationsInputComponent.propTypes = {
  addInformations: PropType.func.isRequired,
  informations: PropType.object.isRequired,
};

const mapStateToProps = state => ({
  informations: state.form.informations,
});

const mapDispatchToProps = dispatch => ({
  addInformations: (infos) => {
    dispatch(formActions.addInformations(infos));
  },
});

const InformationsInput = connect(mapStateToProps, mapDispatchToProps)(
  InformationsInputComponent,
);

export default InformationsInput;
