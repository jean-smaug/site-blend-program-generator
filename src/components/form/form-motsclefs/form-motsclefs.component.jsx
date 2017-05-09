import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxMotClef from './form-checkbox-motclef.component';

export default class FormMotClef extends React.Component {
  render() {
    return (
      <div>
        Mots clefs:
        {
          this.props.datas.map(({ name, selected }, index) =>
            <CheckBoxMotClef index={index} name={name} key={name} selected={selected} />)
        }
      </div>
    );
  }
}

FormMotClef.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
