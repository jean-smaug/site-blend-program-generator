import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as formActions from '../blender.action';

/**
 * Component for one theme's checkbox
 */

export class CheckboxKeywordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: _.sample(['info', 'success', 'primary', 'warning']),
    };
  }

  toggleCheckbox = () => {
    if (!_.includes(this.props.keywords, this.props.item)) {
      this.props.addKeyword(this.props.item);
    } else this.props.removeKeyword(this.props.item);
  };

  render() {
    return (
      <span
        role="presentation"
        className={
          _.includes(this.props.keywords, this.props.item)
            ? `tag is-${this.state.color} keyword-elt`
            : 'tag is-notselected keyword-elt'
        }
        onClick={this.toggleCheckbox}
      >
        {this.props.item.charAt(0).toUpperCase() + this.props.item.substring(1).toLowerCase()}
      </span>
    );
  }
}

CheckboxKeywordComponent.propTypes = {
  addKeyword: PropTypes.func.isRequired,
  removeKeyword: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = state => ({
  keywords: state.form.keywords,
});

const mapDispatchToProps = dispatch => ({
  addKeyword: (word) => {
    dispatch(formActions.addKeyword(word));
  },
  removeKeyword: (word) => {
    dispatch(formActions.removeKeyword(word));
  },
});

const CheckboxKeyword = connect(mapStateToProps, mapDispatchToProps)(CheckboxKeywordComponent);

export default CheckboxKeyword;
