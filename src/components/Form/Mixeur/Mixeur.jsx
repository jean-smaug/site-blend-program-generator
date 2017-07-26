
import React, { Component } from 'react';
import { connect }      from 'react-redux'
import {filterByLevelAndDomain, orderConfences} from '../../../lib/filter'
import data from '../../../lib/data-test.json';
import * as smoothieAction  from '../../../actions/smoothieAction'

/**
 * Component for Submit button to mix
 */
class MixeurComponent extends Component {
  constructor(props) {
    super(props);
    this.submitBtn= this.submitBtn.bind(this);
  }

  submitBtn() {
      this.props.addConferences(
        orderConfences(
          filterByLevelAndDomain(data ,this.props.state.form.domains)
        )
      );
  }

  render() {
    return (
      <div>
        <input style={{
          margin: '20px',
          height: '50px',
          width: '200px',
          backgroundColor: 'black',
          color: 'white'
        }}
               type="button"
               onClick={this.submitBtn}
               value="Mixer"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: {
    form: state.form
  }
});

const mapDispatchToProps = (dispatch) => ({
  addConferences: (word) => {
    dispatch(smoothieAction.addConferences(word))
  },
});

const Mixeur = connect(
  mapStateToProps,
  mapDispatchToProps
)(MixeurComponent);

export default Mixeur

