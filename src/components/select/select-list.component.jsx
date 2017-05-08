import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './select.component';

class SelectList extends React.Component{
  render() {
    console.log("render props", this.props)

    return (
      <div>
        <Select datas={this.props.conferences.conferenceTypes} />
      </div>
    );
  }
}

SelectList.propTypes = {
  conferences: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    conferences: state.conferences,
  };
};

const MSTPSelectList = connect(mapStateToProps)(SelectList);

export default MSTPSelectList;
