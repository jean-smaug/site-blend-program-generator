import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, ToastMessage } from 'react-toastr';
import ListConference from './conference/listConference.component';
import { setConferencesStore } from '../../lib/localStorage.lib';
import './smoothie.css';

class Smoothie extends Component {
  constructor(props) {
    super(props);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleClickSave() {
    this.toast.success(
      `Votre menu est maintenant enregistré dans votre navigateur. (Celui-ci sera
       présent directement à chaque fois que vous venez sur cette page)`,
      'Un vrai chef!',
      {
        timeOut: 7000,
        extendedTimeOut: 1000,
        closeButton: true,
      },
    );
    setConferencesStore({
      dayOne: this.props.dayOne,
      dayTwo: this.props.dayTwo,
    });
  }

  render() {
    return (
      <div>
        <ToastContainer
          ref={(input) => {
            this.toast = input;
          }}
          toastMessageFactory={React.createFactory(ToastMessage.animation)}
          className="toast-bottom-full-width"
        />

        <div className="outils">
        <a
        type="button"
        onClick={this.handleClickSave}
       >
          <i className="fa fa-save"> </i></a>
        </div>
        <div className="columns itemsSmoothie">
          <div className="column">
          <h2>Jour 1</h2><br />
            <ListConference day={this.props.dayOne} />
          </div>
          </div>
          <div className="columns itemsSmoothie">
            <div className="column">
            <h2>Jour 2</h2>
            <ListConference day={this.props.dayTwo} />
            </div>
          </div>
          <div className="column is-one-quarter">
          </div>
      </div>
    );
  }
}

Smoothie.propTypes = {
  dayOne: PropTypes.arrayOf(ListConference.propTypes).isRequired,
  dayTwo: PropTypes.arrayOf(ListConference.propTypes).isRequired,
};

const mapStateToProps = state => ({
  dayOne: state.smoothie.conferences.dayOne,
  dayTwo: state.smoothie.conferences.dayTwo,
});

export default connect(mapStateToProps)(Smoothie);
