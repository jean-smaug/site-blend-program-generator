// @flow

import React from 'react';
import Conference from './conference.component';

import './conference.css';

const ListConference = ({ day: { eight, ten, fourteen, sixteen } }: { day: Object }) =>
  (<div className="conferences">
    <Conference timeBegin={8} timeEnd={10} conferences={eight} />
    <Conference timeBegin={10} timeEnd={12} conferences={ten} />
    <Conference timeBegin={14} timeEnd={16} conferences={fourteen} />
    <Conference timeBegin={16} timeEnd={18} conferences={sixteen} />
  </div>);

export default ListConference;
