import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './select.component';


const SelectList = (props) => {
  /* On peut rajouter les selects voulus en lui passant les datas que l'on veut */
  return (
    <div>
      <Select datas={props.conferencesTypes} />
      <Select datas={props.conferencesTypes} />
    </div>
  );
};

SelectList.propTypes = {
  conferencesTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    conferencesTypes: state.typeConferences,
  };
};

const MSTPSelect = connect(mapStateToProps)(SelectList);

export default MSTPSelect;
