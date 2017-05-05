import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ conferencesTypes }) => (
  <select>
    {conferencesTypes.map(({ name, key }) => <option key={key}>{name}</option>)}
  </select>
);

// Select.PropTypes = {
//   conferenceTypes: PropTypes.array,
// };

export default Select;
