import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ datas }) => (
  <select>
    {datas.map(({ name, key }) => <option key={key}>{name}</option>)}
  </select>
);

Select.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
