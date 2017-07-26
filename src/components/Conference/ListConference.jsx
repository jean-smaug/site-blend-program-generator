import React from 'react';
import PropType from 'prop-types';

import Conference from './Conference';

const ListConference = ({ day }) => {
  const { eight, ten, fourteen, sixteen } = day;

  return (
    <div>
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
