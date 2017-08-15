// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { switchConference } from '../smoothie.action';

import { Conference, Conferences } from '../smoothie.type';
import './switcher.css';

export class SwitchComponent extends Component {
  props: {
    switchConference: (conference: Conference) => void,
    conferences: Conferences,
    currentConferenceId: number,
  };

  selectConference = (conference: Conference) => {
    this.props.switchConference(conference);
  };

  render() {
    const { conferences, currentConferenceId } = this.props;
    console.log(conferences, '##', currentConferenceId);
    const remainingConferences = _.filter(conferences, item => item.id !== currentConferenceId);
    return (
      <div>
        <div className="switcher">
          <ul>
            {_.map(remainingConferences, item =>
              (<li key={item.id}>
                <button onClick={() => this.selectConference(item)}>
                  {item.title}
                </button>
              </li>),
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentConferenceId: state.smoothie.currentConferenceId,
});

const mapDispatchToProps = dispatch => ({
  switchConference: conference => dispatch(switchConference(conference)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchComponent);
