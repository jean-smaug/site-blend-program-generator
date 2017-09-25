// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';
import _ from 'lodash';

import { readStoreByKey, readStoreByEmail } from '../../../lib/database';
import { Conferences } from '../../smoothie/smoothie.type';

export class SwitcherComponent extends Component {
  render() {
    return (
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
            <input
              onChange={this.handleChangeInput}
              className="input"
              type="text"
              name="key"
              placeholder="Votre clef de planning..."
            />
            <div className="separation-input">
              <p>Ou alors...</p>
            </div>
            <input
              onChange={this.handleChangeInput}
              name="email"
              className="input"
              type="text"
              placeholder="Votre email..."
            />
          </section>
          <section className="modal-card-foot footer-restore">
            <button className="button is-success" onClick={this.onClickSubmit}>
              Récuperer
            </button>
          </section>
          <button className="modal-close is-large" onClick={this.props.closeModal} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SwitcherComponent);
