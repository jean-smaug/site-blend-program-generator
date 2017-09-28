// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import Modal from './conferenceModal.component';
import Switcher from '../switch/switch.component';
import { Conferences } from '../smoothie.type';
import './conference.css';
import { getEndTime } from '../../../lib/time.lib';

export class ConferenceComponent extends Component {
  state = {
    isModalVisible: false,
    showMoreConferenceId: null,
    isSwitcherOpened: false,
  };

  state: {
    currentConferenceId: Conferences,
    isModalVisible: boolean,
    showMoreConferenceId: number,
    isSwitcherOpened: boolean,
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
    this.setState({
      isSwitcherOpened: true,
    });
  };

  closeSwitcher = () => {
    this.setState({
      isSwitcherOpened: false,
    });
  };

  render() {
    console.log('THIS.PROPS', this.props);
    const { conferences } = this.props;
    console.log('CONFERENCES:', conferences);
    return (
      <div>
        {this.state.isModalVisible && !_.isEmpty(conferences) ? (
          <Modal
            closeModal={this.toggleModal}
            conference={_.orderBy(conferences.selected, 'timeBegin', 'asc')[this.state.showMoreConferenceId]}
          />
        ) : null}

        {this.state.isSwitcherOpened ? (
          <Switcher closeModal={this.closeSwitcher} conferences={conferences.remaining} />
        ) : null}

        <div className="columns">
          <div className="column">
            <div className="conference">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConferenceComponent;
