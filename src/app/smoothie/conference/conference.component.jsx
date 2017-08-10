// @flow

import React from 'react';
import './conference.css';

const Conference = ({
  name,
  timeBegin,
  timeEnd,
  }: { name: string, timeBegin: number, timeEnd: number }) => (
    <div className="columns">
    <div className="column">
        <div className="conference">
        <div className="conference-opt">
            <a><i className="fa fa-arrows-h circle" /></a>
            <span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span>
            <a><i className="fa fa-lock circle" /></a>
          </div>
        <div className="conference-title">
            {name !== undefined ? name : 'Temps libre'}
          </div>
      </div>
      </div>
  </div>
);

export default Conference;
