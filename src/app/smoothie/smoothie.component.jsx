// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { ToastContainer, ToastMessage } from 'react-toastr';
import ListConference from './conference/listConference.component';
import Switcher from './switch/switch.component';
import { setConferencesStore } from '../../lib/localStorage.lib';
import './smoothie.css';

export class SmoothieComponent extends Component {
  props: {
    dayOne: Array<Object>,
    dayTwo: Array<Object>,
    isSwitcherOpened: boolean,
    switcherConferences: Array<Object>,
  };

  handleClickSave = () => {
    // this.toast.success(
    //   `Votre menu est maintenant enregistré dans votre navigateur. (Celui-ci sera
    //    présent directement à chaque fois que vous venez sur cette page)`,
    //   'Un vrai chef!',
    //   {
    //     timeOut: 7000,
    //     extendedTimeOut: 1000,
    //     closeButton: true,
    //   },
    // );
    setConferencesStore({
      dayOne: this.props.dayOne,
      dayTwo: this.props.dayTwo,
    });
  };

  render() {
    const { dayOne, dayTwo, isSwitcherOpened, switcherConferences } = this.props;
    return (
      <div>
        {/* <ToastContainer
          ref={(input) => {
            this.toast = input;
          }}
          toastMessageFactory={React.createFactory(ToastMessage.animation)}
          className="toast-bottom-full-width"
        /> */}

        {isSwitcherOpened
          ? <Switcher currentConferenceId={0} conferences={switcherConferences} />
          : <p>Switcher</p>}

        <div className="outils">
          <a role="button" aria-pressed="true" tabIndex="0" onClick={this.handleClickSave}>
            <i className="fa fa-save" />
          </a>
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
