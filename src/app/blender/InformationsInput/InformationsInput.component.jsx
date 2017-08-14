import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import emailValidator from 'email-validator';

import * as formActions from '../blender.action';

/**
 * Component to get user's informations
 */
export class InformationsInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.informations,
    };
  }

  handleChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.props.addInformations(this.state);
      this.validateEmail();
    });
  };

  validateEmail = () => {
    this.setState({
      isValidEmail: emailValidator.validate(this.state.email) || this.state.email === '',
    }, () => { this.props.addInformations(this.state); });
  };

  render() {
    return (
      <div>
        <div className="field">
          <label htmlFor="firstname" className="label">Prénom</label>
          <div className="control">
            <input className="input" onChange={this.handleChangeInput} type="text" name="firstname" value={this.props.informations.firstname} placeholder="Prénom" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="lastname" className="label">Nom</label>
          <div className="control">
            <input className="input" onChange={this.handleChangeInput} type="text" name="lastname" value={this.props.informations.lastname} placeholder="Nom" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email" className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className={this.state.isValidEmail ? 'input' : 'input is-danger'} onChange={this.handleChangeInput} type="email" name="email" value={this.props.informations.email} placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
            { !this.state.isValidEmail ?
              <span className="icon is-small is-right">
                <i className="fa fa-warning" />
              </span> :
              '' }
          </div>
          { !this.state.isValidEmail ? <p className="help is-danger">Le format de votre email est invalide</p> : ''}
        </div>
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
