import React from 'react';
import PropType from 'prop-types';

import Conference from './Conference';

const ListConference = ({ day }) => {
  const { eight, ten, fourteen, sixteen } = day;

  return (
    <div>
      <Conference {...eight} />
      <Conference {...ten} />
      <Conference {...fourteen} />
      <Conference {...sixteen} />
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
