// @flow

import React from 'react';
import './conference.css';
import Modal from './conferenceModal.component';

class Conference extends React.Component {
  state = {
    isModalVisible: false,
  };

  state: {
    isModalVisible: boolean,
  };

  props: {
    name: string,
    timeBegin: string,
    timeEnd: string,
    // keywords: Array<string>,
    // picture: string,
    // twitter: string,
    // linkedin: string,
    // speaker: string,
    // description: string,
  };

  toggleModal = () => {
    this.setState((prev) => {
      const newState = !prev.isModalVisible;
      return {
        isModalVisible: newState,
      };
    });
  };

  render() {
    const { name, timeBegin, timeEnd } = this.props;
    return (
      <div>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.isModalVisible}
          title={name !== undefined ? name : 'Temps libre'}
          {...this.props}
        />
        <div className="columns" onClick={this.toggleModal} role="presentation">
          <div className="column">
            <div className="conference">
              <div className="conference-opt">
                <a>
                  <i className="fa fa-arrows-h circle" />
                </a>
                <span className="conference-time">{`${timeBegin}h00 > ${timeEnd}h00`}</span>
                <a>
                  <i className="fa fa-lock circle" />
                </a>
              </div>
              <div role="button" className="conference-title">
                {name !== undefined ? name : 'Temps libre'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Conference;
