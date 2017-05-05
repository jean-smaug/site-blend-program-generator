import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ conferenceTypes }) => (
  <select>
    {conferenceTypes.map(({ name, key }) => <option key={key}>{name}</option>)}
  </select>
);

Select.propTypes = {
  conferenceTypes: PropTypes.array,
};

export default Select;
