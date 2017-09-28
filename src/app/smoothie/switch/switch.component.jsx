// @flow
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash';
import { Conference, Conferences } from '../smoothie.type';
import { switchConference } from '../smoothie.action';
import './switcher.css';
import { getEndTime } from '../../../lib/time.lib';

// import { Conferences } from '../../smoothie/smoothie.type';

export class SwitcherComponent extends Component {
  props: {
    conferences: Conferences,
    closeModal: () => void,
    switchConference: (conference: Conference) => void,
  };

  switchConference = (conference: Conference) => {
    this.props.switchConference(conference);
    this.props.closeModal();
  };

  render() {
    return (
      <div className="modal is-active">
        <div
          className="modal-background"
          onClick={this.props.closeModal}
          role="button"
          aria-pressed="true"
          tabIndex="0"
        />
        <div className="modal-card">
          <section className="modal-card-header header-restore">
            <h1>Switcher de conférence !</h1>
          </section>
          <section className="modal-card-body">
            <div className="message-body">
              {`Attention, certaines conférences peuvent
                enlever celles déja présentes en cas de conflit d'horaire !`}
            </div>
            <ul>
              {_.map(this.props.conferences, (conference, id) => (
                <li className="item-switcher" role="presentation" key={id} onClick={() => this.switchConference(conference)}>
                  <p>{`${conference.timeBegin} > ${getEndTime(conference.timeBegin, conference.duration)}`}</p>
                  <p>{conference.title}</p>
                </li>
              ))}
            </ul>
          </section>
          <button className="modal-close is-large" onClick={this.props.closeModal} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  switchConference: conference => dispatch(switchConference(conference)),
});

export default connect(null, mapDispatchToProps)(SwitcherComponent);
