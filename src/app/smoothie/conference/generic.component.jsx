// @flow

import React from 'react';
import './conference.css';

const Generic = ({
  horaire,
  message,
}: {
  horaire: string,
  message: string,
}) => (
  <div>
    <div className="columns">
      <div className="column">
        <div className="conference">
          <div className="conference-opt">
            <div role="button" className="conference-title">
              <div role="presentation" className="conference conference-generic">
                <p className="horaire-preview">{horaire}</p>
                <p className="title-preview">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default Generic;
