// @flow

import React from 'react';
import './conference.css';
import Modal from './conferenceModal.component';

class Conference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev) => {
      const newState = !prev.modalState;
      return {
        modalState: newState,
      };
    });
  }

  render() {
    return (
      <div>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title={this.props.name !== undefined ? this.props.name : 'Temps libre'}
          speaker={this.props.speaker}
          description={this.props.description}
          keywords={this.props.keywords}
          picture={this.props.picture}
          twitter={this.props.twitter}
          linkedin={this.props.linkedin}
          timeBegin={this.props.timeBegin}
          timeEnd={this.props.timeEnd}
        />
        <div className="columns" onClick={this.toggleModal} aria-pressed="true" tabIndex="0">
          <div className="column">
            <div className="conference">
              <div className="conference-opt">
                <a>
                  <i className="fa fa-arrows-h circle" />
                </a>
                <span className="conference-time">{`${this.props.timeBegin}h00 > ${this.props
                  .timeEnd}h00`}</span>
                <a>
                  <i className="fa fa-lock circle" />
                </a>
              </div>
              <div role="button" className="conference-title">
                {this.props.name !== undefined ? this.props.name : 'Temps libre'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Conference.propTypes = {
  name: PropType.string.isRequired,
  timeBegin: PropType.string.isRequired,
  timeEnd: PropType.string.isRequired,
  keywords: PropType.array,
  picture: PropType.string,
  twitter: PropType.string,
  linkedin: PropType.string,
  speaker: PropType.string,
  description: PropType.string,
};

export default Conference;
