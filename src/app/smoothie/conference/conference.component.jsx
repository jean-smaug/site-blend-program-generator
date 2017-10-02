// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import Modal from './conferenceModal.component';
import Switcher from '../switch/switch.component';
import { Conferences } from '../smoothie.type';
import './conference.css';
import { getEndTime } from '../../../lib/time.lib';
import { getConferencesConflict } from '../../../lib/dataFilter.lib';

export class ConferenceComponent extends Component {
  state = {
    isModalVisible: false,
    showMoreConferenceId: null,
    isSwitcherOpened: false,
    conferenceSwitch: null,
  };

  state: {
    currentConferenceId: Conferences,
    isModalVisible: boolean,
    showMoreConferenceId: number,
    isSwitcherOpened: boolean,
    conferenceSwitch: Conferences
  };

  props: {
    conferences: Conferences,
  };

  toggleModal = (key) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      showMoreConferenceId: key,
    });
  };

  openSwitcher = (e: Event) => {
    e.stopPropagation();
    const { conferences } = this.props;
    this.setState({
      isSwitcherOpened: true,
      conferenceSwitch: _.orderBy(conferences.selected, 'timeBegin', 'asc')[e.target.id],
    });
  };

  closeSwitcher = () => {
    this.setState({
      isSwitcherOpened: false,
      conferenceSwitch: null,
    });
  };

  render() {
    const { conferences } = this.props;
    return (
      <div>
        {this.state.isModalVisible && !_.isEmpty(conferences) ? (
          <Modal
            closeModal={this.toggleModal}
            conference={_.orderBy(conferences.selected, 'timeBegin', 'asc')[this.state.showMoreConferenceId]}
          />
        ) : null}

        {this.state.isSwitcherOpened ? (
          <Switcher
            closeModal={this.closeSwitcher}
            conferences={conferences.remaining}
            conference={this.state.conferenceSwitch}
          />
        ) : null}

        <div className="columns">
          <div className="column">
            <div className="conference">
              <div role="button" className="conference-title">
                {conferences.selected.length !== 0 ? (
                  _.map(_.orderBy(conferences.selected, 'timeBegin', 'asc'), (conference, key) => (
                    <div onClick={() => this.toggleModal(key)} role="presentation" className={`conference conference-${conference.duration}`}>
                      {conferences.remaining !== undefined &&
                       conferences.remaining.length >= 1 &&
                       getConferencesConflict(conferences.remaining, conference).length >= 1 ? (
                         <div>
                            <p
                             role="presentation"
                             onClick={e => this.openSwitcher(e)}
                             className="switch-btn"
                             id={key}
                           >
                             <i id={key} className="fa fa-list" />
                           </p>
                          </div>
                        ) : null}
                      <p className="horaire-preview">{`${conference.timeBegin} > ${getEndTime(conference.timeBegin, conference.duration)}`}</p>
                      <p className="title-preview"> {conference.title.charAt(0).toUpperCase() + conference.title.substring(1).toLowerCase()}</p>
                      <p className="room-preview"> {`Salle: ${conference.room}`}</p>
                    </div>
                  ))
                ) : (
                  'Temps libre'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConferenceComponent;
