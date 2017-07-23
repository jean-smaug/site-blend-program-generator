import React from 'react';
import PropType from 'prop-types';

const Conference = ({ name }) => (
  <div>
    <button className="switchButton">Switch</button>
    <h4>{name}</h4>
    <button className="lockButton">Lock</button>
  </div>
);

Conference.propTypes = {
  name: PropType.string.isRequired,
};

export default Conference;
