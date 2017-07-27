import React, { Component } from 'react';
import PropType from 'prop-types';

const Conference = (props) => {
  const { name, timeBegin, timeEnd } = props;
  return (
    <div>
      <button className="switchButton">Switch</button>
      <span>{`${timeBegin} - ${timeEnd}`}</span>
      <button className="lockButton">Lock</button>
      <span>{name}</span>
    </div>
  );
};
Conference.propTypes = {
  name: PropType.string.isRequired,
  timeBegin: PropType.string.isRequired,
  timeEnd: PropType.string.isRequired,
};

export default Conference;
