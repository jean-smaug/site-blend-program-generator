// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, ToastMessage } from 'react-toastr';
import ListConference from './conference/listConference.component';
import Switcher from './switch/switch.component';
import { setConferencesStore, isStore } from '../../lib/localStorage.lib';

import { Day, Conference } from './smoothie.type';
import './smoothie.css';
import ModalShowKey from './modalShowKey/modalShowKey.component';

export class SmoothieComponent extends Component {
  props: {
    dayOne: Day,
    dayTwo: Day,
    isSwitcherOpened: boolean,
    switcherConferences: Array<Conference>,
  };

  state = {
    isModalVisible: false,
  };

  state: {
    isModalVisible: boolean,
  };

  componentDidMount= () => {
    if (isStore('key')) {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
      });
    }
  };

  handleClickSave = () => {
    this.toast.success(
      `Votre menu est maintenant enregistré dans votre navigateur. (Celui-ci sera
       présent directement à chaque fois que vous venez sur cette page)`,
      'Un vrai chef!',
      {
        timeOut: 7000,
        extendedTimeOut: 1000,
        closeButton: true,
      },
    );
    setConferencesStore({
      dayOne: this.props.dayOne,
      dayTwo: this.props.dayTwo,
    });
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  render() {
    const { dayOne, dayTwo, isSwitcherOpened, switcherConferences } = this.props;
    return (
      <div>
        {this.state.isModalVisible
          ? <ModalShowKey
            closeModal={this.toggleModal}
          />
          : null}

        <ToastContainer
          ref={(input) => {
            this.toast = input;
          }}
          toastMessageFactory={React.createFactory(ToastMessage.animation)}
          className="toast-bottom-full-width"
        />

        {isSwitcherOpened ? <Switcher conferences={switcherConferences} /> : null}

        <div className="outils columns">
          <div className="column">
            <a role="button" aria-pressed="true" tabIndex="0" onClick={this.handleClickSave}>
              <i className="fa fa-save" />
            </a>
            { isStore('key') ?
              <a role="button" aria-pressed="true" tabIndex="0" onClick={this.toggleModal}>
                <i className="fa fa-info" />
              </a> : '' }
          </div>
        </div>
        <div className="columns itemsSmoothie">
          <div className="column">
            <div className="header-date">
              <h2>Jour 1</h2>
              <h3>Jeudi 26 octobre</h3>
            </div>
            <ListConference day={dayOne} />
          </div>
        </div>
        <div className="columns itemsSmoothie">
          <div className="column">
            <div className="header-date">
              <h1>Jour 2</h1>
              <h3>Vendredi 27 octobre</h3>
            </div>
            <ListConference day={dayTwo} />
          </div>
        </div>
        <div className="column is-one-quarter" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dayOne: state.smoothie.dayOne,
  dayTwo: state.smoothie.dayTwo,
  isSwitcherOpened: state.smoothie.isSwitcherOpened,
  switcherConferences: state.smoothie.switcherConferences,
});

export default connect(mapStateToProps)(SmoothieComponent);
