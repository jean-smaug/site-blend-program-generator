import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListConference from '../Conference/ListConference';

const Smoothie = ({ dayOne, dayTwo }) => (
  <div>
    <ListConference conferences={dayOne} />
    <ListConference conferences={dayTwo} />
  </div>
);

Smoothie.propTypes = {
  dayOne: PropTypes.array.isRequired,
  dayTwo: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  dayOne: state.form.dayOne,
  dayTwo: state.form.dayTwo,
});

export default connect(mapStateToProps)(Smoothie);
