import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormType from './form-types.component';

class FormList extends React.Component {
  render() {
    return (
      <div>
        <FormType datas={this.props.formulaire.conferenceTypes} />
      </div>
    );
  }
}

FormList.propTypes = {
  formulaire: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    formulaire: state.formulaire,
  };
};

const MSTPFormList = connect(mapStateToProps)(FormList);

export default MSTPFormList;
