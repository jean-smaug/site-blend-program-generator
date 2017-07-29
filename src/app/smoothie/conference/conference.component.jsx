import React from 'react';
import PropType from 'prop-types';
import 'bulma/css/bulma.css';

const Conference = ({ name, timeBegin, timeEnd, description }) => (
  <div className="columns">
    <div className="column is-one-quarter">
      {`${timeBegin}h - ${timeEnd}h`}
    </div>
    <div className="column">
  <div className="card" style={{ margin: '10px'}}>
    <header className="card-header">
      <p className="card-header-title">
        <span className="titreConference"> {name !== undefined ? name : 'Temps libre'}</span>
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        {description !== undefined ? description : 'Il y a beaucoup de chose à faire pour vous ! '}
      </div>
    </div>
    <footer className="card-footer">
      <a className="card-footer-item lockButton"><i className="fa fa-lock"> </i></a>
      <a className="card-footer-item switchButton"><i className="fa fa-arrow-right"> </i></a>
    </footer>
  </div>
    </div>
  </div>
);
Conference.propTypes = {
  name: PropType.string.isRequired,
  timeBegin: PropType.string.isRequired,
  timeEnd: PropType.string.isRequired,
  description: PropType.string.isRequired,
};

export default Conference;
