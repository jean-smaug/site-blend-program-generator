import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  filterByLevelAndDomain,
  orderConfences,
} from '../../../lib/dataFilter.lib';
import data from '../../../data.json';
import { addConferences } from '../../smoothie/smoothie.action';

/**
 * Component for Submit button to mix
 */
export class MixeurComponent extends Component {
  constructor(props) {
    super(props);
    this.submitBtn = this.submitBtn.bind(this);
  }

  submitBtn() {
    this.props.addConferences(
      orderConfences(
        filterByLevelAndDomain(data, this.props.state.form.domains),
      ),
    );
  }

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
