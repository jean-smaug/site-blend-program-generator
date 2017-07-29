import React from 'react';
import PropType from 'prop-types';

import Conference from './conference.component';

const ListConference = ({ day }) => {
  const { eight, ten, fourteen, sixteen } = day;
  return (
    <div>
      <Conference {...eight[0]} />
      <hr />
      <Conference {...ten[0]} />
      <hr />
      <Conference {...fourteen[0]} />
      <hr />
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
