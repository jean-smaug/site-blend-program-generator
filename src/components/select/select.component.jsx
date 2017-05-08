import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { choixType } from '../../actions/typeConferencesAction';

class MySelect extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <select id="select" onChange={this.props.handleChange} >
        {
          this.props.datas.map(({ name, key }, index) =>
            <option value={index} key={key}>{name}</option>)
        }
      </select>
    );
  }
}


MySelect.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(choixType(event.target.value));
    },
  };
};

const MSTPSelect = connect(null, mapDispatchToProps)(MySelect);

export default MSTPSelect;
