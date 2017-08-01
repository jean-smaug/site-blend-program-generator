import React from 'react';
import PropType from 'prop-types';
import './conference.css';

const Conference = ({ name, timeBegin, timeEnd }) => (
  <div className="columns">
    <div className="column">
      <div className="conference">
        <div className="conference-opt"><a><i className="fa fa-arrows-h circle" /></a><span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span><a><i className="fa fa-lock circle" /></a></div>
        <div className="conference-title">{name !== undefined ? name : 'Temps libre'}</div>
      </div>
    </div>
  </div>

);
Conference.propTypes = {
  name: PropType.string.isRequired,
  timeBegin: PropType.string.isRequired,
  timeEnd: PropType.string.isRequired,
};

export default Conference;
