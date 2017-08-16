// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './modalRestore.css';
import { readStoreByKey } from '../../../lib/database';
import { mixConferencesAction } from '../../smoothie/smoothie.action';
import { Conferences } from '../../smoothie/smoothie.type';
import { restoreAllForm } from '../blender.action';

export class ModalRestoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      email: '',
    };
  }

  onClickSubmit = async () => {
    if (this.state.key !== '') {
      const userData = (await readStoreByKey(this.state.key)) || [];
      this.props.restoreAllForm(userData.blender);
      this.props.closeModal();
    }
  };

  handleChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  props: {
    closeModal: () => void,
    addConference: (conferences: Conferences) => void,
  };


  render = () => (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={this.props.closeModal}
        role="button"
        aria-pressed="true"
        tabIndex="0"
      />
      <div className="modal-card">
        <section className="modal-card-header header-restore">
          <h1>Récupération de votre Menu !</h1>
        </section>
        <section className="modal-card-body">
          <input onChange={this.handleChangeInput} className="input" type="text" name="key" placeholder="Votre clef de planning..." />
          <div className="separation-input"><p >Ou alors...</p></div>
          <input onChange={this.handleChangeInput} name="email" className="input" type="text" placeholder="Votre email..." />
        </section>
        <section className="modal-card-foot footer-restore">
          <button className="button is-success" onClick={this.onClickSubmit}>Récuperer</button>
        </section>
        <button className="modal-close is-large" onClick={this.props.closeModal} />
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  addConference: (conferences) => {
    dispatch(mixConferencesAction(conferences));
  },
  restoreAllForm: (blender) => {
    dispatch(restoreAllForm(blender));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalRestoreComponent);
