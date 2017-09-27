// @flow

import React, { Component } from 'react';
import './conference.css';

export default class Generic extends Component {
  props: {
    horaire: string,
    message: string,
  };
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div className="conference">
              <div className="conference-opt">
                <div role="button" className="conference-title">
                  <div role="presentation" className="conference conference-generic">
                    <p className="horaire-preview">{this.props.horaire}</p>
                    <p className="title-preview">{this.props.message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

