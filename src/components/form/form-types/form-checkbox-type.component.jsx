import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { choixType, choixLevel } from '../../../actions/FormAction';

class CheckBoxType extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      visible: false,
    };
  }
  handleMouseEnter() {
    this.setState({ visible: true });
  }
  handleMouseLeave() {
    this.setState({ visible: false });
  }
  render() {
    let radiobutton = null;

    if (this.state.visible && document.querySelector(`#${this.props.name}`).checked) {
      radiobutton = (<div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <input
          type="radio"
          name={`level${this.props.name}`}
          value="beginner"
          checked={this.props.level === 'beginner'}
          onChange={this.props.handleChangeLevel}
        /> Débutant
        <input
          type="radio"
          name={`level${this.props.name}`}
          value="expert"
          checked={this.props.level === 'expert'}
          onChange={this.props.handleChangeLevel}
        /> Expert
      </div>);
    }
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <label htmlFor={this.props.name} >{this.props.name}</label>
          <input
            id={this.props.name}
            type="checkbox"
            value={this.props.name}
            checked={this.props.selected === true}
            onChange={this.props.handleChangeType}
          />
        </div>
        {radiobutton}
      </div>
    );
  }
}


CheckBoxType.propTypes = {
  name: PropTypes.string.isRequired,
  handleChangeType: PropTypes.func.isRequired,
  handleChangeLevel: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    handleChangeType: () => {
      dispatch(choixType(ownProps.index, document.querySelector(`#${ownProps.name}`).checked));
    },
    handleChangeLevel: (event) => {
      dispatch(choixLevel(ownProps.index, event.target.value));
    },
  };
};

const MSTPCheckboxType = connect(null, mapDispatchToProps)(CheckBoxType);


export default MSTPCheckboxType;
