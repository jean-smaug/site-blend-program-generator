// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import Modal from './conferenceModal.component';
import { Conferences } from '../smoothie.type';
import './conference.css';

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
    timeBegin: number,
    timeEnd: number,
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

  render() {
    const { timeBegin, timeEnd, conferences } = this.props;
    return (
      <div>
        {this.state.isModalVisible && !_.isEmpty(conferences) ? (
          <Modal
            closeModal={this.toggleModal}
            conference={conferences.selected[this.state.showMoreConferenceId]}
          />
        ) : null}
        <div className="columns">
          <div className="column">
            <div className="conference">
              <div className="conference-opt">
                {conferences.remaining.length > 1 ? (
                  <i
                    className="fa fa-arrows-h circle"
                    role="presentation"
                    onClick={e => this.openSwitcher(e)}
                  />
                ) : null}
                <span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span>
                {/* {conferences.length > 1 ? <i className="fa fa-lock circle" /> : null} */}
              </div>
              <div role="button" className="conference-title">
                {conferences.selected.length !== 0 ? (
                  _.map(conferences.selected, ({ title }, key) => (
                    <div onClick={() => this.toggleModal(key)} role="presentation">
                      {title}
                      <br />
                      <br />
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
