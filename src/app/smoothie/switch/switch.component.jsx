// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash';
import { Conference, Conferences } from '../smoothie.type';
import { switchConference } from '../smoothie.action';
// import { Conferences } from '../../smoothie/smoothie.type';

export class SwitcherComponent extends Component {
  props = {
    conferences: Conferences,
  };

  switchConference = (conference: Conference) => {
    this.props.switchConference(conference);
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
            <ul>
              {_.map(this.props.conferences, (conference, id) => (
                <li key={id} onClick={() => this.switchConference(conference)}>
                  {conference.title}
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
