// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, ToastMessage } from 'react-toastr';
import ListConference from './conference/listConference.component';
import Switcher from './switch/switch.component';
import { setConferencesStore, isStore, setOneShow } from '../../lib/localStorage.lib';

import { Day, Conference } from './smoothie.type';
import './smoothie.css';
import ModalShowKey from './modalShowKey/modalShowKey.component';

export class SmoothieComponent extends Component {
  state = {
    isModalVisible: false,
  };

  state: {
    isModalVisible: boolean,
  };

  componentDidMount = () => {
    if (isStore('key') && !isStore('isAlreadyShow')) {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
      }, () => {
        setOneShow();
      });
    }
  };

  props: {
    dayOne: Day,
    dayTwo: Day,
    isSwitcherOpened: boolean,
    switcherConferences: Array<Conference>,
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
      <div className="smoothie">
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
            {/* <a role="button" aria-pressed="true" tabIndex="0" */}
            {/* <i className="fa fa-save" /> */}
            {/* onClick={this.handleClickSave}> */}
            {/* <i className="fa fa-save" /> */}
            {/* </a> */}
            { isStore('key') ?
              <a role="button" aria-pressed="true" tabIndex="0" onClick={this.toggleModal}>
                <i className="fa fa-info" />
              </a> : '' }
          </div>
        </div>
        <div id="citron">
          <img src="https://img11.hostingpics.net/pics/267927citron.png" alt="lemon" />
        </div>
        <div id="paille">
          <img src="https://img11.hostingpics.net/pics/673317paille.png" alt="straw" />
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-2 itemsSmoothie">
            <div className="header-date">
              <h1>Jour 1</h1>
              <h3>Jeudi 26 octobre</h3>
            </div>
            <ListConference number="one" day={dayOne} />
          </div>
          <div className="column is-one-quarter" />
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-2 itemsSmoothie">
            <div className="header-date">
              <h1>Jour 2</h1>
              <h3>Vendredi 27 octobre</h3>
            </div>
            <ListConference number="two" day={dayTwo} />
          </div>
          <div className="column is-one-quarter" />
        </div>
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
