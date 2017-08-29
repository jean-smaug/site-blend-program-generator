import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import './index.css';
import FormContainer from './blender/blender.component';
import SmoothieContainer from './smoothie/smoothie.component';
import { removeConferences } from './smoothie/smoothie.action';


// var $mainButton = $(".main-button"),
//   $closeButton = $(".close-button"),
//   $buttonWrapper = $(".button-wrapper"),
//   $ripple = $(".ripple"),
//   $layer = $(".layered-content");
//
// $mainButton.on("click", function(){
//   $buttonWrapper.addClass("clicked").delay(900).queue(function(next){
//     $layer.addClass("active");
//     next();
//   });
// });
//
// $closeButton.on("click", function(){
//   $layer.removeClass("active");
//   $buttonWrapper.removeClass("clicked");
// });


const handleClickOpen = () => {
  document.getElementsByClassName('button-wrapper')[0].className = 'button-wrapper clicked';
  document.getElementsByClassName('layered-content')[0].className = 'layered-content active';
};

const handleClickClose = () => {
  document.getElementsByClassName('button-wrapper')[0].className = 'button-wrapper';
  document.getElementsByClassName('layered-content')[0].className = 'layered-content';
};


export const App = ({ smoothie, removeConferencesFromState }) =>
  (<div className="App">
    <div id="pool">
      <div className="button-wrapper">
        <div className="layer" />
        <button onClick={handleClickOpen} className="main-button fa fa-info">
          <div className="ripple" />
        </button>
      </div>
      <div className="layered-content">
        <button onClick={handleClickClose} className="close-button close-button1 fa fa-times" />
        <div className="content">
          <p>Développeur de l'application</p>
          <h1>Maxime Blanc</h1>
          <h1>Maxime Chabert</h1>
          <p>On peut aussi mettre ici plein de texte, a quoi sert l'application etc</p>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        {_.isEmpty(smoothie.dayOne) && _.isEmpty(smoothie.dayTwo) ? <FormContainer /> : null}
      </div>
    </div>
    <div className="columns">
      <div className="column">
        {!_.isEmpty(smoothie.dayOne) && !_.isEmpty(smoothie.dayTwo)
          ? <div>
            <input
              style={{
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                boxShadow: '2px 2px 8px #aaa',
                backgroundColor: '#E6421D',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2em',
              }}
              type="button"
              value="Remix"
              onClick={removeConferencesFromState}
            />{' '}
            <SmoothieContainer />
          </div>
          : null}
      </div>
    </div>
  </div>);

App.propTypes = {
  smoothie: SmoothieContainer.propTypes.isRequired,
  removeConferencesFromState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  smoothie: state.smoothie,
});

const mapDispatchToProps = dispatch => ({
  removeConferencesFromState: () => {
    dispatch(removeConferences());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
