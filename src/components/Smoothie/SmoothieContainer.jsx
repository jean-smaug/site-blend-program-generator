import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListConference from '../Conference/ListConference';
import * as conferencesStorage from '../../lib/ConferenceStorage';


class Smoothie extends Component {

  constructor(props) {
    super(props);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleClickSave() {
    conferencesStorage.setConferencesStore(
      { day1: this.props.day1, day2: this.props.day2 });
  }

  render() {
    return (
      <div>
        <input
          type="button"
          onClick={this.handleClickSave}
          value="Sauvegarder"
        />
        <hr />
        <h2>Jour 1</h2>
        <ListConference day={this.props.day1} />
        <h2>Jour 2</h2>
        <ListConference day={this.props.day2} />
      </div>
    );
  }
}

Smoothie.propTypes = {
  day1: PropTypes.arrayOf(ListConference.propTypes).isRequired,
  day2: PropTypes.arrayOf(ListConference.propTypes).isRequired,
};

const mapStateToProps = state => ({
  day1: state.smoothie.conferences.day1,
  day2: state.smoothie.conferences.day2,
});

export default connect(mapStateToProps)(Smoothie);
