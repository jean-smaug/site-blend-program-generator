// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as formActions from '../blender.action';

/**
 * Component for one objectif's checkbox
 */

export class CheckboxObjectifComponent extends Component {
  props: {
    addObjectif: (objectif: Object) => void,
    removeObjectif: (objectif: Object) => void,
    item: Object,
    objectifs: Object,
  };

  toggleCheckbox = (e: Event) => {
    if (e.target.checked) this.props.addObjectif(this.props.item.id);
    else this.props.removeObjectif(this.props.item.id);
  };

  render() {
    return (
      <div>
        <div>
          <input
            onChange={this.toggleCheckbox}
            name={this.props.item.id}
            type="checkbox"
            checked={_.includes(this.props.objectifs, this.props.item.id)}
          />
          {this.props.item.libelle}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  objectifs: state.form.objectifs,
});

const mapDispatchToProps = dispatch => ({
  addObjectif: (objectif) => {
    dispatch(formActions.addObjectif(objectif));
  },
  removeObjectif: (objectif) => {
    dispatch(formActions.removeObjectif(objectif));
  },
});

const CheckboxObjectif = connect(mapStateToProps, mapDispatchToProps)(CheckboxObjectifComponent);

export default CheckboxObjectif;
