// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByLevelAndDomain, orderConfences } from '../../../lib/dataFilter.lib';
import { getConferences } from '../../../lib/database';
import { addConferences } from '../../smoothie/smoothie.action';

/**
 * Component for Submit button to mix
 */
export class MixeurComponent extends Component {
  props: {
    addConferences: () => void,
    state: Object,
  };

  submitBtn = async () => {
    const conferences = (await getConferences()) || [];

    this.props.addConferences(
      orderConfences(filterByLevelAndDomain(conferences, this.props.state.form.domains)),
    );
  };

  render() {
    return (
      <div>
        <input
          style={{
            height: '100px',
            width: '100px',
            borderRadius: '50%',
            boxShadow: '2px 2px 8px #aaa',
            backgroundColor: '#E6421D',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2em',
          }}
          type="button"
          onClick={this.submitBtn}
          value="GO MIX"
        />
      </div>
    );
  }
}

MixeurComponent.propTypes = {
  addConferences: PropTypes.func.isRequired,
  state: PropTypes.shape({
    form: PropTypes.shape({
      domains: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  state: {
    form: state.form,
  },
});

const mapDispatchToProps = dispatch => ({
  addConferences: (word) => {
    dispatch(addConferences(word));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MixeurComponent);
