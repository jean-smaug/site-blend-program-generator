import React from 'react';
import PropType from 'prop-types';
import './conference.css';

import Conference from './conference.component';

const ListConference = ({ day }) => {
  const { eight, ten, fourteen, sixteen } = day;
  return (
    <div className="conferences">
      <Conference {...eight[0]} />
      <Conference {...ten[0]} />
      <Conference {...fourteen[0]} />
      <Conference {...sixteen[0]} />
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
