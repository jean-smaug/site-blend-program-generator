// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './conferenceModal.component';
import { openSwitcherAction } from '../smoothie.action';
import './conference.css';

export class ConferenceComponent extends Component {
  state = {
    selectedConferenceId: 0,
    isModalVisible: false,
    isSwitcherOpened: false,
  };

  state: {
    selectedConferenceId: number,
    isModalVisible: boolean,
    isSwitcherOpened: boolean,
  };

  props: {
    timeBegin: number,
    timeEnd: number,
    openSwitcher: () => void,
    conferences: Array<{
      name: string,
      keywords: Array<string>,
      picture: string,
      twitter: string,
      linkedin: string,
      speaker: string,
      description: string,
    }>,
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  openSwitcher = (e: Event, selectedConferenceId: number, conferences: Array<Object>) => {
    e.stopPropagation();
    this.props.openSwitcher(selectedConferenceId, conferences);
  };

  render() {
    const { timeBegin, timeEnd, conferences } = this.props;
    return (
      <div onClick={() => this.toggleModal()} role="presentation">
        {this.state.isModalVisible
          ? <Modal
            closeModal={this.toggleModal}
            {...conferences[this.state.selectedConferenceId]}
          />
          : null}
        <div className="columns">
          <div className="column">
            <div className="conference">
              <div className="conference-opt">
                <button
                  onClick={e => this.openSwitcher(e, this.state.selectedConferenceId, conferences)}
                >
                  <i className="fa fa-arrows-h circle" />
                </button>
                <span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span>
                <i className="fa fa-lock circle" />
              </div>
              <div role="button" className="conference-title">
                {conferences[0] !== undefined ? conferences[0].title : 'Temps libre'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openSwitcher: (selectedConferenceId, conferences) =>
    dispatch(openSwitcherAction(selectedConferenceId, conferences)),
});

export default connect(null, mapDispatchToProps)(ConferenceComponent);
