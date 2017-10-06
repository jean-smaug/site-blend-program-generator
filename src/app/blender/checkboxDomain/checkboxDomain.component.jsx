import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as formActions from '../blender.action';

/**
 * Component for one keyword's checkbox
 */
export class CheckboxDomainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: {
        domain: this.props.item.id,
        level: 'beginner',
      },
      hover: false,
    };
  }

  onMouseEnterHandler = () => {
    this.setState({
      hover: true,
    });
  };

  onMouseLeaveHandler = () => {
    this.setState({
      hover: false,
    });
  };

  getCheckedLevel = (level) => {
    let checked = false;
    _.forEach(this.props.domains, (element) => {
      if (element.domain === this.props.item.id && element.level === level) {
        checked = true;
      }
    });
    return checked;
  };

  isChecked = () => {
    let checked = false;
    _.forEach(this.props.domains, (element) => {
      if (element.domain === this.props.item.id) {
        checked = true;
      }
    });
    return checked;
  };

  submitLevel = (e, level) => {
    e.stopPropagation();
    if (!this.getCheckedLevel(level)) {
      if (this.isChecked()) {
        this.setState({ domain: { domain: this.props.item.id, level } }, () => {
          this.props.updateLevel(this.state.domain);
        });
      } else {
        this.setState({ domain: { domain: this.props.item.id, level } }, () => {
          this.toogleChecked();
        });
      }
    } else {
      this.toogleChecked();
    }
  };

  toogleChecked = () => {
    if (!this.isChecked()) {
      this.props.addDomain(this.state.domain);
    } else {
      this.props.removeDomain(this.state.domain);
    }
  };

  render() {
    return (
      <div className="div-checkbox">
        <img src={`/img/domains/${this.props.item.libelle}.PNG`} alt={this.props.item.libelle} />
        <h1 className={`titre-domaine ${this.props.item.libelle}`}>
          {this.props.item.libelle}
        </h1>
        <div>
          <div className="checkbox-domain">
            <input
              id={`${this.props.item.libelle}-beginner`}
              type="checkbox"
              onClick={event => this.submitLevel(event, 'beginner')}
              checked={this.getCheckedLevel('beginner')}
              className="checkbox-domains-input"
            /> <label htmlFor={`${this.props.item.libelle}-beginner`} className="titre-checkbox">Découvrir</label>
          </div>
          <div className="checkbox-domain">
            <input
              id={`${this.props.item.libelle}-expert`}
              type="checkbox"
              onClick={event => this.submitLevel(event, 'expert')}
              checked={this.getCheckedLevel('expert')}
              className="checkbox-domains-input"
            /> <label htmlFor={`${this.props.item.libelle}-expert`} className="titre-checkbox">Approfondir</label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxDomainComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    libelle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  domains: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  updateLevel: PropTypes.func.isRequired,
  removeDomain: PropTypes.func.isRequired,
  addDomain: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  domains: state.form.domains,
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxDomainComponent);
