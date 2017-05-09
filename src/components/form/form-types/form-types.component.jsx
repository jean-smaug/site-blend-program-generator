import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxType from './form-checkbox-type.component';

export default class FormType extends React.Component {
  render() {
    return (
      <div>
        Types de conférences :
        {
          this.props.datas.map(({ name, key, selected, level }, index) =>
            <CheckBoxType index={index} name={name} key={key} selected={selected} level={level} />)
        }
      </div>
    );
  }
}

FormType.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
