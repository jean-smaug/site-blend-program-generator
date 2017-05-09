import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { choixMotClef } from '../../../actions/FormAction';

class CheckBoxMotClef extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name} >{this.props.name}</label>
        <input
          id={this.props.name}
          type="checkbox"
          checked={this.props.selected === true}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}


CheckBoxMotClef.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: (event) => {
      dispatch(choixMotClef(ownProps.index, event.target.checked));
    },
  };
};

const MSTPCheckboxMotClef = connect(null, mapDispatchToProps)(CheckBoxMotClef);


export default MSTPCheckboxMotClef;
