import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ conferences }) => (
  <div>
    {conferences.map(conference => <span>{conference}</span>)}
  </div>
);

Menu.propTypes = {
  conferences: PropTypes.array,
};

export default Menu;
