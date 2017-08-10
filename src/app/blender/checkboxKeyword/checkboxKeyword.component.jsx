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
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.state =  {
      color: _.sample(['info', 'success', 'primary', 'warning'])
    };
  }

  toggleCheckbox(e) {
    if (!_.includes(this.props.keywords, this.props.item.id)) this.props.addKeyword(this.props.item.id);
    else this.props.removeKeyword(this.props.item.id);
  }


  render() {
    return (
      <span className={_.includes(this.props.keywords, this.props.item.id) ? `tag is-${this.state.color} keyword-elt` : `tag is-notselected keyword-elt` }
            onClick={this.toggleCheckbox}
      >
          {this.props.item.libelle}
      </span>
    );
  }
}

CheckboxKeywordComponent.propTypes = {
  addKeyword: PropTypes.func.isRequired,
  removeKeyword: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    libelle: PropTypes.string.isRequired,
  }).isRequired,
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

const CheckboxKeyword = connect(mapStateToProps, mapDispatchToProps)(
  CheckboxKeywordComponent,
);

export default CheckboxKeyword;
