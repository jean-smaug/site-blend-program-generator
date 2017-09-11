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
    currentConferences: [],
    isModalVisible: false,
    isSwitcherOpened: false,
  };

  state: {
    currentConferenceId: Conferences,
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
        {this.state.isModalVisible && !_.isEmpty(conferences) ? (
          <Modal
            closeModal={this.toggleModal}
            conference={_.find(conferences, { id: this.state.currentConferenceId })}
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
                    onClick={e => this.openSwitcher(e, this.state.currentConferenceId, conferences)}
                  />
                ) : null}
                <span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span>
                {/* {conferences.length > 1 ? <i className="fa fa-lock circle" /> : null} */}
              </div>
              <div role="button" className="conference-title">
                {conferences.selected.length !== 0 ? (
                  _.map(conferences.selected, ({ title }) => (
                    <div>
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

const mapDispatchToProps = dispatch => ({
  openSwitcher: (currentConferenceId, conferences) =>
    dispatch(openSwitcherAction(currentConferenceId, conferences)),
});

export default connect(null, mapDispatchToProps)(ConferenceComponent);
