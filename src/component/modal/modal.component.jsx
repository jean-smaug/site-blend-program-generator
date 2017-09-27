// @flow

import React, { Component } from 'react';

class Modal extends Component {
  state: {
    showModal: Boolean,
  };

  state = {
    showModal: false,
  };

  props: {
    render: () => void,
  };

  toggleModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div className="modal is-active">
        <div
          className="modal-background"
          onClick={closeModal}
          role="button"
          aria-pressed="true"
          tabIndex="0"
        />
        <div className="modal-card">
          <section className="modal-card-header header-show-key">
            <h1>Votre clef de planning !</h1>
          </section>
          <section className="modal-card-body body-show-key">{this.props.render()}</section>
          <section className="modal-card-foot footer-show-key">
            <button className="button is-success" onClick={this.toggleModal}>
              Ok !
            </button>
          </section>
          <button className="modal-close is-large" onClick={closeModal} />
        </div>
      </div>
    );
  }
}
