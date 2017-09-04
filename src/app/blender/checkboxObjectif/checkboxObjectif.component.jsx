import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as formActions from '../blender.action';

/**
 * Component for one objectif's checkbox
 */

export class CheckboxObjectifComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: _.sample(['blue', 'orange', 'red', 'green']),
    };
  }

  isChecked = () => {
    let checked = false;
    _.forEach(this.props.objectifs, (element) => {
      if (element === this.props.item.id) {
        checked = true;
      }
    });
    return checked;
  };

  toogleChecked = () => {
    if (!this.isChecked()) {
      this.props.addObjectif(this.props.item.id);
    } else {
      this.props.removeObjectif(this.props.item.id);
    }
  };

  render() {
    return (
      <div>
        <li
          onClick={this.toogleChecked}
          className={this.isChecked() ? `is-${this.state.color}` : ''}
          role="presentation"
        >
          {this.props.item.libelle}
        </li>
      </div>


    );
  }
}

CheckboxObjectifComponent.propTypes = {
  addObjectif: PropType.func.isRequired,
  removeObjectif: PropType.func.isRequired,
  item: PropType.shape({
    id: PropType.number.isRequired,
    libelle: PropType.string.isRequired,
  }).isRequired,
  objectifs: PropType.arrayOf({
    id: PropType.number.isRequired,
    libelle: PropType.string.isRequired,
  }).isRequired,
};

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

const CheckboxObjectif = connect(mapStateToProps, mapDispatchToProps)(
  CheckboxObjectifComponent,
);

export default CheckboxObjectif;
