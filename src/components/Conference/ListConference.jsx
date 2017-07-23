import React, { Component } from 'react';
import PropType from 'prop-types';
import _ from 'lodash';

import Conference from './Conference';

class ListConference extends Component {
  render() {
    const { conferences } = this.props;
    return _.map(conferences, conference => (
      <Conference title={conference.name} />
    ));
  }
}

ListConference.propTypes = {
  conferences: PropType.arrayOf({
    name: PropType.string.isRequired,
    level: PropType.string.isRequired,
    domain: PropType.string.isRequired,
    dateBegin: PropType.string.isRequired,
    dateEnd: PropType.string.isRequired,
  }).isRequired,
};

export default ListConference;
