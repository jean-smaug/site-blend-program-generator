import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListConference from '../Conference/ListConference';

const Smoothie = ({ dayOne, dayTwo }) => (
  <div>
    <ListConference {...dayOne} />
    <ListConference {...dayTwo} />
  </div>
);

Smoothie.propTypes = {
  dayOne: PropTypes.array.isRequired,
  dayTwo: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  dayOne: state.dayOne,
  dayTwo: state.dayTwo,
});

export default connect(mapStateToProps)(Smoothie);
