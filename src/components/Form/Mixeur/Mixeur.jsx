
import React, { Component } from 'react';
import { connect }      from 'react-redux'
import {filterByLevelAndDomain, orderConfences} from '../../../lib/filter'
import data from '../../../lib/data-test.json';

/**
 * Component for Submit button to mix
 */
class MixeurComponent extends Component {
  constructor(props) {
    super(props);
    this.submitBtn= this.submitBtn.bind(this);
  }

  submitBtn() {
      console.log(this.props.state.form.domains)
      console.log(orderConfences(filterByLevelAndDomain(data ,this.props.state.form.domains)))
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
  state: { form: state.form }
});

const mapDispatchToProps = (dispatch) => ({
});

const Mixeur = connect(
  mapStateToProps,
  mapDispatchToProps
)(MixeurComponent);

export default Mixeur

