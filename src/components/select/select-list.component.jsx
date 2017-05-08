import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './select.component';


const SelectList = (props) => {
  /* On peut rajouter les selects voulus en lui passant les datas que l'on veut */
  return (
    <div>
      <Select datas={props.conferenceTypes} />
    </div>
  );
};

SelectList.propTypes = {
  conferenceTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    conferenceTypes: state.conferences.conferenceTypes,
  };
};

const MSTPSelectList = connect(mapStateToProps)(SelectList);

export default MSTPSelectList;
