// @flow

import React, { Component } from 'react';

class Modal extends Component {
  state = {
    showModal: false,
  };

  state: {
    showModal: Boolean,
  };

  props: {
    render: () => void,
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      this.state.showModal ?
  (<div className="modal is-active">
        <div
          className="modal-background"
          onClick={() => this.closeModal()}
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
            
            
            <button className="button is-success" onClick={() => this.closeModal()}>
              Ok !
            </button>
          </section>
          <button className="modal-close is-large" onClick={() => this.closeModal()} />
        </div>
      </div>)
    : null);
  }
}
