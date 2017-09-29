// @flow
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash';
import { Conference, Conferences } from '../smoothie.type';
import { switchConference } from '../smoothie.action';
import './switcher.css';
import { getEndTime, convertHourToString } from '../../../lib/time.lib';
import { getConferencesConflict } from '../../../lib/dataFilter.lib';

// import { Conferences } from '../../smoothie/smoothie.type';

export class SwitcherComponent extends Component {
  state = {
    conferenceSelected: null,
    conferencesConflits: null,
  };

  state: {
    conferenceSelected: Conference,
    conferencesConflits: Conferences,
  };

  props: {
    conferences: Conferences,
    closeModal: () => void,
    smoothie: Conferences,
    switchConference: (conference: Conference) => void,
  };

  switchConference = (conference: Conference) => {
    const time = conference.timeBegin.split('h')[0];
    const letterTime = convertHourToString(time);
    const timeSlotConferences = this.props.smoothie[conference.day][letterTime];
    const conferencesConflits = getConferencesConflict(
      timeSlotConferences.selected,
      conference,
    ).map(item => <li>{item.title}</li>);
    this.setState({
      conferencesConflits,
      conferenceSelected: conference,
    });
  };

  confirmSelection = async() => {
    this.props.switchConference(this.state.conferenceSelected);
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
            {this.state.conferencesConflits !== null ? (
              <div className="message-body">
                <p className="msg-conflit">Attention les conférences suivantes sont en conflit horaire avec la séléction et
                vont donc être enlevées du planning :</p>
                {this.state.conferencesConflits}
              </div>
            ) : null}
            <ul>
              {_.map(this.props.conferences, (conference, id) => (
                <li
                  className={
                    this.state.conferenceSelected === conference ? (
                      'item-switcher selected-conf'
                    ) : (
                      'item-switcher'
                    )
                  }
                  role="presentation"
                  key={id}
                  onClick={() => this.switchConference(conference)}
                >
                  <p>{`${conference.timeBegin} > ${getEndTime(
                    conference.timeBegin,
                    conference.duration,
                  )}`}</p>
                  <p>{conference.title.charAt(0).toUpperCase() +
                  conference.title.substring(1).toLowerCase()}</p>
                </li>
              ))}
            </ul>
            <input
              type="button"
              className="btn-suivant"
              onClick={this.confirmSelection}
              value="confirmer"
            />
          </section>
          <button className="modal-close is-large" onClick={this.props.closeModal} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

const mapDispatchToProps = dispatch => ({
  switchConference: conference => dispatch(switchConference(conference)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitcherComponent);
