import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
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
      [event.target.name]: event.target.value,
    }, () => {
      this.props.addInformations(this.state);
      this.validateEmail();
    });
  };

  validateEmail = () => {
    const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    this.setState({
      isValidEmail: reg.test(this.state.email),
    });
  };

  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Prénom</label>
          <div className="control">
            <input htmlFor="firstname" className="input" onChange={this.handleChangeInput} type="text" name="firstname" value={this.props.informations.firstname} placeholder="Prénom" />
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
            <span className="icon is-small is-right">
              <i className="fa fa-warning" />
            </span>
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
