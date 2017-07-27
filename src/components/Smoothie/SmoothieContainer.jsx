import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListConference from '../Conference/ListConference';

const Smoothie = ({ day1, day2 }) => (
  <div>
    <h2>Jour 1</h2>
    <ListConference day={day1} />
    <h2>Jour 2</h2>
    <ListConference day={day2} />
  </div>
);

Smoothie.propTypes = {
  day1: PropTypes.arrayOf(ListConference.propTypes).isRequired,
  day2: PropTypes.arrayOf(ListConference.propTypes).isRequired,
};

const mapStateToProps = state => ({
  day1: state.smoothie.conferences.day1,
  day2: state.smoothie.conferences.day2,
});

export default connect(mapStateToProps)(Smoothie);