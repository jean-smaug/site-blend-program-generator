// @flow

import React from 'react';
import _ from 'lodash';

const conferenceModal = ({
  closeModal,
  modalState,
  title,
  speaker,
  description,
  keywords,
  picture,
  twitter,
  linkedin,
  timeBegin,
  timeEnd,
  }: {
  modalState: boolean,
  title: string,
  picture: string,
  twitter: string,
  linkedin: string,
  speaker: string,
  description: string,
  timeBegin: string,
  timeEnd: string,
  closeModal: () => void,
  keywords: Array<string>,
}) => {
  if (!modalState) {
    return null;
  }

  const keywordsShow = _.map(keywords, element =>
    (<span className={`tag is-${_.sample(['danger', 'info', 'success', 'primary', 'warning'])}`}>
      {element}
    </span>),
  );

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
        <section className="modal-card-header">
          {twitter
            ? <a href={`https://twitter.com/${twitter}`} className="social-twitter">
              <span className="icon is-large">
                <i className="fa fa-twitter" aria-hidden="true" />
              </span>
            </a>
            : null}
          <img
            className="image speaker"
            src={picture || 'https://img15.hostingpics.net/pics/688698speaker.png'}
            alt="speaker"
          />
          {linkedin
            ? <a href={linkedin}>
              <span className="icon is-medium social-linkedin">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </span>
            </a>
            : null}
          <h1>
            {speaker || 'Chef inconnu'}
          </h1>
        </section>
        <section className="modal-card-body">
          <h1>
            {title}
          </h1>
          <h2>
            {`${timeBegin}h00 > ${timeEnd}h00`}
          </h2>
          {description}
          <div className="tags">
            {keywordsShow}
          </div>
        </section>
        <button className="modal-close is-large" onClick={closeModal} />
      </div>
    </div>
  );
};

export default conferenceModal;
