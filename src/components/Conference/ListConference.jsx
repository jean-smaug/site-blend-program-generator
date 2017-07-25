import React, { Component } from 'react';
import PropType from 'prop-types';
import _ from 'lodash';

import Conference from './Conference';

class ListConference extends Component {
  constructor() {
    super();
    this.state = { foo: 1 };
  }

  render() {
    const { conferences } = this.props;

    return (
      <div>
        {_.map(conferences, conference => (
          <Conference key={conference.id} {...conference} />
        ))}
      </div>
    );
  }
}

ListConference.propTypes = {
  conferences: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      description: PropType.string.isRequired,
      level: PropType.string.isRequired,
      domain: PropType.string.isRequired,
      date: PropType.string.isRequired,
      timeEnd: PropType.number.isRequired,
      timeBegin: PropType.number.isRequired,
    }),
  ).isRequired,
};

export default ListConference;
