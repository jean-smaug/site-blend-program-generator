// @flow

import React from 'react';
import './conference.css';
import Modal from './conferenceModal.component';

class Conference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  props: {
    name: string,
    timeBegin: string,
    timeEnd: string,
    keywords: array,
    picture: string,
    twitter: string,
    linkedin: string,
    speaker: string,
    description: string,
  };

  toggleModal() {
    this.setState((prev) => {
      const newState = !prev.isModalVisible;
      return {
        isModalVisible: newState,
      };
    });
  }

  render() {
    const { name, timeBegin, timeEnd } = { ...this.props };
    return (
      <div>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.isModalVisible}
          title={name !== undefined ? name : 'Temps libre'}
          {...this.props}
        />
        <div className="columns" onClick={this.toggleModal} aria-pressed="true" tabIndex="0">
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
