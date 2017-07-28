import React from 'react';
import PropType from 'prop-types';

const Conference = ({ name, timeBegin, timeEnd }) => (
  <div>
    <button className="switchButton">Switch</button>
    <span>{`${timeBegin} - ${timeEnd}`}</span>
    <button className="lockButton">Lock</button>
    <br />
    <span>{name !== undefined ? name : 'Temps libre'}</span>
  </div>
);
Conference.propTypes = {
  name: PropType.string.isRequired,
  timeBegin: PropType.string.isRequired,
  timeEnd: PropType.string.isRequired,
};

export default Conference;
