import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import ListConference from '../Conference/ListConference';
import * as conferencesStorage from '../../lib/ConferenceStorage';

class Smoothie extends Component {

  constructor(props) {
    super(props);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleClickPdf = this.handleClickPdf.bind(this);
  }

  handleClickSave() {
    conferencesStorage.setConferencesStore({
      dayOne: this.props.dayOne,
      dayTwo: this.props.dayTwo,
    });
  }

  handleClickPdf() {
    window.html2canvas = html2canvas;
    const doc = new JsPdf();
    doc.addHTML(document.getElementsByTagName('body')[0], 15, 15, {
      width: 170,
    }, () => {
      const blob = doc.output('blob');
      window.open(URL.createObjectURL(blob));
    });
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
        <input
          type="button"
          onClick={this.handleClickPdf}
          value="Générer pdf"
        />
        <hr />
        <h2>Jour 1</h2>
        <ListConference day={this.props.dayOne} />
        <h2>Jour 2</h2>
        <ListConference day={this.props.dayTwo} />
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
