import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as formActions from '../blender.action';

/**
 * Component for one keyword's checkbox
 */
class CheckboxDomainComponent extends Component {
  constructor(props) {
    super(props);
    this.submitLevel = this.submitLevel.bind(this);
    this.toogleChecked = this.toogleChecked.bind(this);
    this.isChecked = this.isChecked.bind(this);

    this.state = {
      domain: {
        domain: this.props.item.id,
        level: 'noob',
      },
    };
  }

  getCheckedLevel(level) {
    let checked = false;
    this.props.state.domains.forEach((element) => {
      if (element.domain === this.props.item.id && element.level === level) {
        checked = true;
      }
    });
    return checked;
  }

  isChecked() {
    let checked = false;
    this.props.state.domains.forEach((element) => {
      if (element.domain === this.props.item.id) {
        checked = true;
      }
    });
    return checked;
  }


  submitLevel(e, level) {
    e.stopPropagation();
    this.setState(
      {
        domain: { domain: this.props.item.id, level: level },
      },
      () => {
        this.props.updateLevel(this.state.domain);
      },
    );
  }
  toogleChecked() {
    if (!this.isChecked()) {
      this.props.addDomain(this.state.domain);
    } else {
      this.props.removeDomain(this.state.domain);
    }
  }

  render() {
    return (
      <div
        className={ this.isChecked() ? 'blockDomain domain-selected' : 'blockDomain'}
        onClick={this.toogleChecked}
      >
        <div>
          <h1> {this.props.item.libelle} </h1>
          {this.isChecked()
            ? <div className="groupBtnLevel">
              <span onClick={(event) => this.submitLevel(event, 'noob')} className={this.getCheckedLevel('noob') ? `tag is-info level-objectif` : `tag is-notselected level-objectif` } > Découvrir </span>
              <span onClick={(event) => this.submitLevel(event, 'confirmed')} className={this.getCheckedLevel('confirmed') ? `tag is-warning level-objectif` : `tag is-notselected level-objectif` } > Appronfondir </span>
            </div> : '' }
        </div>
      </div>
    );
  }
}

CheckboxDomainComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    libelle: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    domains: PropTypes.array.isRequired,
  }).isRequired,
  updateLevel: PropTypes.func.isRequired,
  removeDomain: PropTypes.func.isRequired,
  addDomain: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: { domains: state.form.domains },
});

const mapDispatchToProps = dispatch => ({
  addDomain: (domain) => {
    dispatch(formActions.addDomain(domain));
  },
  removeDomain: (domain) => {
    dispatch(formActions.removeDomain(domain));
  },
  updateLevel: (domain) => {
    dispatch(formActions.updateLevel(domain));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CheckboxDomainComponent,
);
