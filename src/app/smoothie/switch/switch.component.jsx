// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { switchConference } from '../smoothie.action';

import './switcher.css';

class SwitchComponent extends Component {
  props: {
    switchConference: (conference: Object) => void,
    conferences: Array<Object>,
    currentConferenceId: number,
  };

  selectConference = (conference: Object) => {
    this.props.switchConference(conference);
  };

  render() {
    const { conferences, currentConferenceId } = this.props;
    const remainingConferences = _.filter(conferences, item => item.id !== currentConferenceId);
    console.log(conferences);
    return (
      <div>
        <div className="switcher">
          <ul>
            {_.map(remainingConferences, item =>
              (<li key={item.id}>
                <button onClick={() => this.selectConference(item)}>
                  {item.name}
                </button>
              </li>),
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  switchConference: conference => dispatch(switchConference(conference)),
});

export default connect(null, mapDispatchToProps)(SwitchComponent);
