// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';
import _ from 'lodash';

import './modalRestore.css';
import { readStoreByKey, readStoreByEmail } from '../../../lib/database';
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
      this.checkWithKey();
    } else if (this.state.email !== '') {
      this.checkWithEmail();
    } else {
      this.modalError('Vous devez remplir au moins l\'un des deux champs !');
    }
  };

  modalError = (text) => {
    this.toastErrorForm.error(
      text,
      'Erreur',
      {
        timeOut: 7000,
        extendedTimeOut: 1000,
        closeButton: true,
      },
    );
  };

  checkWithKey = async () => {
    const userData = (await readStoreByKey(this.state.key)) || [];
    if (!_.isEmpty(userData)) {
      this.restoreStore(userData);
    } else {
      this.modalError('Votre key est incorrect chef..');
    }
  };

  checkWithEmail = async () => {
    const userData = (await readStoreByEmail(this.state.email)) || [];
    if (!_.isEmpty(userData)) {
      this.restoreStore(userData);
    } else {
      this.modalError('Votre email n\'est pas encore connu chef..');
    }
  };

  restoreStore = (userData) => {
    const userDataManip = userData;
    // Restore blender
    this.props.restoreAllForm(userData.blender);
    // restore smoothie
    if (userData.smoothie.dayOne === undefined) userDataManip.smoothie.dayOne = {};
    if (userData.smoothie.dayTwo === undefined) userDataManip.smoothie.dayTwo = {};
    userDataManip.smoothie.dayOne = this.formatDay(userData.smoothie.dayOne);
    userDataManip.smoothie.dayTwo = this.formatDay(userData.smoothie.dayTwo);
    _.map(userData.smoothie.dayTwo, conf => this.formatDay(conf));
    this.props.addConference({ ...userData.smoothie });

    this.props.closeModal();
  };

  formatDay = (day) => {
    const dayManip = day;
    if (day.ten === undefined) dayManip.ten = [];
    if (day.eight === undefined) dayManip.eight = [];
    if (day.fourteen === undefined) dayManip.fourteen = [];
    if (day.sixteen === undefined) dayManip.sixteen = [];
    return dayManip;
  };

  handleChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  props: {
    closeModal: () => void,
    addConference: (conferences: Conferences) => void,
    restoreAllForm: () => void,
  };

  render = () => (
    <div className="modal is-active">
      <ToastContainer
        ref={(input) => {
          this.toastErrorForm = input;
        }}
        toastMessageFactory={React.createFactory(ToastMessage.animation)}
        className="toast-top-right"
      />
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
