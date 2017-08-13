// @flow

import React, { Component } from 'react';
import Modal from './conferenceModal.component';
import './conference.css';

export default class Conference extends Component {
  state = {
    isModalVisible: false,
    isSwitcherOpened: false,
  };

  state: {
    selectedConference: number,
    isModalVisible: boolean,
    isSwitcherOpened: boolean,
  };

  props: {
    name: string,
    timeBegin: string,
    timeEnd: string,
    // keywords: Array<string>,
    // picture: string,
    // twitter: string,
    // linkedin: string,
    // speaker: string,
    // description: string,
  };

  toggleModal = () => {
    this.setState((prev) => {
      const newState = !prev.isModalVisible;
      return {
        isModalVisible: newState,
      };
    });
  };

  openSwitcher = () => {
    this.setState({
      isSwitcherOpened: !this.state.isSwitcherOpened,
    });
  };

  switchConference = (index: number) => {
    this.setState({
      selectedConference: index,
    });
  };

  render() {
    const { timeBegin, timeEnd, name } = this.props;

    return (
      <div>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.isModalVisible}
          title={name !== undefined ? name : 'Temps libre'}
          {...this.props}
        />
        <div className="columns" onClick={this.toggleModal} role="presentation">
          <div className="column">
            <div className="conference">
              <div className="conference-opt">
                <i
                  role="presentation"
                  onClick={this.openSwitcher}
                  className="fa fa-arrows-h circle"
                />
                <span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span>
                <i className="fa fa-lock circle" />
              </div>
              <div role="button" className="conference-title">
                {name !== undefined ? name : 'Temps libre'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
