// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Modal from './conferenceModal.component';
import { openSwitcherAction } from '../smoothie.action';
import { Conferences } from '../smoothie.type';
import './conference.css';

export class ConferenceComponent extends Component {
  state = {
    currentConferenceId: !_.isEmpty(this.props.conferences) ? this.props.conferences[0].id : 0,
    isModalVisible: false,
    isSwitcherOpened: false,
  };

  state: {
    currentConferenceId: number,
    isModalVisible: boolean,
    isSwitcherOpened: boolean,
  };

  componentWillReceiveProps(nextProps: Object) {
    this.setState({
      currentConferenceId: !_.isEmpty(nextProps.conferences) ? nextProps.conferences[0].id : 0,
    });
  }

  props: {
    timeBegin: number,
    timeEnd: number,
    openSwitcher: (currentConferenceId: number, conferences: Conferences) => void,
    conferences: Conferences,
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  openSwitcher = (e: Event, currentConferenceId: number, conferences: Conferences) => {
    e.stopPropagation();
    this.props.openSwitcher(currentConferenceId, conferences);
  };

  render() {
    const { timeBegin, timeEnd, conferences } = this.props;
    return (
      <div onClick={() => this.toggleModal()} role="presentation">
        {this.state.isModalVisible && !_.isEmpty(conferences)
          ? <Modal
            closeModal={this.toggleModal}
            conference={_.find(conferences, { id: this.state.currentConferenceId })}
          />
          : null}
            <div className="conference">
              <div className="conference-opt">
                <span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span>
              </div>
              <div role="button" className="conference-title">
                {conferences[0] !== undefined ? conferences[0].title : 'Temps libre'}
              </div>
            </div>
          </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openSwitcher: (currentConferenceId, conferences) =>
    dispatch(openSwitcherAction(currentConferenceId, conferences)),
});

export default connect(null, mapDispatchToProps)(ConferenceComponent);
