import React from 'react';
import PropType from 'prop-types';
import './conference.css';

import Conference from './conference.component';

const ListConference = ({ day }) => {
  const { eight, ten, fourteen, sixteen } = day;
  return (
    <div className="conferences">
      <Conference timeBegin={8} timeEnd={10} conferences={eight} />
      <Conference timeBegin={10} timeEnd={12} conferences={ten} />
      <Conference timeBegin={14} timeEnd={16} conferences={fourteen} />
      <Conference timeBegin={16} timeEnd={18} conferences={sixteen} />
    </div>
  );
};

ListConference.propTypes = {
  day: PropType.shape({
    eight: Conference.propTypes,
    ten: Conference.propTypes,
    fourteen: Conference.propTypes,
    sixteen: Conference.propTypes,
  }).isRequired,
};

export default ListConference;
