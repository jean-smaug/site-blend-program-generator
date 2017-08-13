// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { switchConference } from '../smoothie.action';

class SwitchComponent extends Component {
  props: {
    switchConference: (conference: Object) => void,
    conferences: Array<Object>,
  };

  selectConference = (item: number) => {
    const { conferences } = this.props;
    console.log('foo##', _.indexOf(conferences, item));
    this.props.switchConference(_.indexOf(conferences, item));
  };

  render() {
    const { conferences } = this.props;

    return (
      <div>
        {conferences.length !== 0
          ? <div className="switcher">
            {_.map(conferences, item =>
              (<div>
                <span role="presentation" onClick={this.selectConference(item)} key={item.id}>
                  {item.name}
                </span>
                <br />
              </div>),
            )}
          </div>
          : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  switchConference: conference => dispatch(switchConference(conference)),
});

export default connect(null, mapDispatchToProps)(SwitchComponent);
