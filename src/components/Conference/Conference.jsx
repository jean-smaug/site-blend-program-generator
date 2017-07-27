import React, { Component } from 'react';
import PropType from 'prop-types';

class Conference extends Component {
  render() {
    const { name, timeBegin, timeEnd } = this.props;

    return (
      <div>
        <button className="switchButton">Switch</button>
        <span>{`${timeBegin} - ${timeEnd}`}</span>
        <button className="lockButton">Lock</button>
        <span>{name}</span>
      </div>
    );
  }
}
Conference.propTypes = {
  name: PropType.string.isRequired,
  timeBegin: PropType.string.isRequired,
  timeEnd: PropType.string.isRequired,
};

export default Conference;
