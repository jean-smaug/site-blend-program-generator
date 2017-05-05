import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Select extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
}
({ conferencesTypes }) => (
  <div>
    <select>
      {/* {conferencesTypes.map(({ name, key }) => (
        <option key={key}>{name}</option>
      ))}*/}
    </select>
    <select>
      <option>Noob</option>
      <option>Boss</option>
    </select>
  </div>
);

// Select.PropTypes = {
//   conferenceTypes: PropTypes.array,
// };

const mapStateToProps = (state) => {
  console.log(state);
  return {
    conferencesTypes: state.conferencesTypes,
  };
};

const MSTPSelect = connect(mapStateToProps)(Select);

export default MSTPSelect;
