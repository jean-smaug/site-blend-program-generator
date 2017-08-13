// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as formActions from '../blender.action';

/**
 * Component for one theme's checkbox
 */

export class CheckboxKeywordComponent extends Component {
  state = {
    color: _.sample(['info', 'success', 'primary', 'warning']),
  };

  state: {
    color: string,
  };

  props: {
    addKeyword: (word: string) => void,
    removeKeyword: (word: string) => void,
    item: Object,
    keywords: Array<string>,
  };

  toggleCheckbox = () => {
    if (!_.includes(this.props.keywords, this.props.item.id)) {
      this.props.addKeyword(this.props.item.id);
    } else this.props.removeKeyword(this.props.item.id);
  };

  render() {
    return (
      <span
        role="presentation"
        className={
          _.includes(this.props.keywords, this.props.item.id)
            ? `tag is-${this.state.color} keyword-elt`
            : 'tag is-notselected keyword-elt'
        }
        onClick={this.toggleCheckbox}
      >
        {this.props.item.libelle}
      </span>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxKeywordComponent);
