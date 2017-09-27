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

  // componentWillReceiveProps(nextProps: Object) {
  //   this.setState({
  //     currentConferenceId: !_.isEmpty(nextProps.conferences) ? nextProps.conferences[0].id : 0,
  //   });
  // }

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
          <Switcher closeModal={this.closeSwitcher} conferences={conferences.remaining} />
        ) : null}

        <div className="columns">
          <div className="column">
            <div className="conference">
              {conferences.remaining.length > 1 ? (
                <i
                  className="fa fa-arrows-h circle"
                  role="presentation"
                  onClick={e => this.openSwitcher(e)}
                />
              ) : null}
              <div role="button" className="conference-title">
                {conferences.selected.length !== 0 ? (
                  _.map(_.orderBy(conferences.selected, 'timeBegin', 'asc'), ({ title, timeBegin, duration }, key) => (
                    <div onClick={() => this.toggleModal(key)} role="presentation" className={`conference conference-${duration}`}>
                      <p className="horaire-preview">{`${timeBegin} > ${getEndTime(timeBegin, duration)}`}</p>
                      <p className="title-preview"> {title.charAt(0).toUpperCase() + title.substring(1).toLowerCase()}</p>
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
