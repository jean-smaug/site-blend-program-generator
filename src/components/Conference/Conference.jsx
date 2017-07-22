import React from 'react';
import PropType from 'prop-types';

const Conference = ({ title }) => (
  <div>
    <button className="switchButton">Switch</button>
    <h4>{title}</h4>
    <button className="lockButton">Lock</button>
  </div>
);

Conference.propTypes = {
  title: PropType.string.isRequired,
};

export default Conference;
