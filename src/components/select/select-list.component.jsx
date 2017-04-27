import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ conferenceTypes }) => (
  <select>
    {conferenceTypes.map((conferenceType, key) => (
      <option key={key}>{conferenceType}</option>
    ))}
  </select>
);

Select.PropTypes = {
  conferenceTypes: PropTypes.array,
};

export default Select;
