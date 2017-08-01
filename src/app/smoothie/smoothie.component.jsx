import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, ToastMessage } from 'react-toastr';
import ListConference from './conference/listConference.component';
import { setConferencesStore } from '../../lib/localStorage.lib';
import './smoothie.css';

export class SmoothieComponent extends Component {
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
      <div className="smoothie">
        <ToastContainer
          ref={(input) => {
            this.toast = input;
          }}
          toastMessageFactory={React.createFactory(ToastMessage.animation)}
          className="toast-bottom-full-width"
        />

        <div className="outils">
          <a
            role="button"
            aria-pressed="true"
            tabIndex="0"
            onClick={this.handleClickSave}
          >
            <i className="fa fa-save" />
          </a>
        </div>
        <div className="columns itemsSmoothie">
          <div className="column">
            <div className="header-date">
              <h1>Jour 1</h1>
              <h2>Jeudi 26 octobre</h2>
            </div>
            <ListConference day={this.props.dayOne} />
          </div>
        </div>
        <div className="columns itemsSmoothie">
          <div className="column">
            <div className="header-date">
              <h1>Jour 2</h1>
              <h2>Vendredi 27 octobre</h2>
            </div>
            <ListConference day={this.props.dayTwo} />
          </div>
        </div>
        <div className="column is-one-quarter" />
      </div>
    );
  }
}

SmoothieComponent.propTypes = {
  dayOne: PropTypes.arrayOf(ListConference.propTypes).isRequired,
  dayTwo: PropTypes.arrayOf(ListConference.propTypes).isRequired,
};

const mapStateToProps = state => ({
  dayOne: state.smoothie.dayOne,
  dayTwo: state.smoothie.dayTwo,
});

export default connect(mapStateToProps)(SmoothieComponent);
