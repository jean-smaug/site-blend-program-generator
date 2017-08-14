// @flow

import React from 'react';
import _ from 'lodash';

const ConferenceModal = ({
  title,
  speaker,
  description,
  timeBegin,
  closeModal,
  tags,
  }: {
  title: string,
  speaker: Object,
  description: string,
  timeBegin: string,
  closeModal: () => void,
  tags: Array<string>,
}) => {
  const keywordsShow = _.map(tags, element =>
    (<span className={`tag is-${_.sample(['danger', 'info', 'success', 'primary', 'warning'])}`}>
      {element}
    </span>),
  );
  const { twitterLink, pictureLink, linkedinLink, name } = speaker;

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
          {twitterLink
            ? <a href={`https://twitter.com/${twitterLink}`} className="social-twitter">
              <span className="icon is-large">
                <i className="fa fa-twitter" aria-hidden="true" />
              </span>
            </a>
            : null}
          <img
            className="image speaker"
            src={pictureLink || 'https://img15.hostingpics.net/pics/688698speaker.png'}
            alt="speaker"
          />
          {linkedinLink
            ? <a href={linkedinLink}>
              <span className="icon is-medium social-linkedin">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </span>
            </a>
            : null}
          <h1>
            {name || 'Chef inconnu'}
          </h1>
        </section>
        <section className="modal-card-body">
          <h1>
            {title}
          </h1>
          <h2>
            {`${timeBegin}h00 > h00`}
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

export default ConferenceModal;
