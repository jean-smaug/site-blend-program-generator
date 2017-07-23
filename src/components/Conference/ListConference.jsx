import React, { Component } from 'react';
import PropType from 'prop-types';
import _ from 'lodash';

import Conference from './Conference';

class ListConference extends Component {
  render() {
    const { conferences } = this.props;
    return _.map(conferences, conference => (
      <Conference name={conference.name} />
    ));
  }
}

ListConference.propTypes = {
  conferences: PropType.arrayOf(
    PropType.shape({
      name: PropType.string.isRequired,
      level: PropType.string.isRequired,
      domain: PropType.string.isRequired,
      date: PropType.string.isRequired,
      timeEnd: PropType.number.isRequired,
      timeBegin: PropType.number.isRequired,
    }),
  ).isRequired,
};

export default ListConference;
