// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as formActions from '../blender.action';

/**
 * Component for one keyword's checkbox
 */
export class CheckboxDomainComponent extends Component {
  state = {
    domain: {
      domain: this.props.item.id,
      level: 'noob',
    },
    hover: false,
  };

  getCheckedLevel = (level: string) => {
    let checked = false;
    _.forEach(this.props.domains, (element) => {
      if (element.domain === this.props.item.id && element.level === level) {
        checked = true;
      }
    });
    return checked;
  };

  state: {
    domain: Object,
    hover: boolean,
  };

  props: {
    item: Object,
    domains: Array<string>,
    updateLevel: (domain: Object) => void,
    removeDomain: (domain: Object) => void,
    addDomain: (domain: Object) => void,
  };

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

  submitLevel = (e: Event, level: string) => {
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
      <div
        // className={this.isChecked() ? 'blockDomain domain-selected' : 'blockDomain'}
        className="blockDomain"
        role="presentation"
        onClick={this.toogleChecked}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        style={
          this.isChecked()
            ? { backgroundImage: `url(img/domains/${this.props.item.id}.png)` }
            : { backgroundImage: `url(./img/domains/${this.props.item.id}-disabled.png)` }
        }
      >
        <div>
          <h1 style={this.isChecked() ? { backgroundColor: '#E6421C' } : { backgroundColor: '' }}>
            {' '}{this.props.item.libelle}{' '}
          </h1>
          {!this.isChecked()
            ? <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores
                autem dicta dignissimos dolore dolorum ea facere, impedit in iste molestiae, nisi
                nostrum perferendis, placeat quod sapiente tempora velit.
            </p>
            : ''}
          {this.isChecked() || this.state.hover
            ? <div className="groupBtnLevel">
              <span
                role="presentation"
                onClick={event => this.submitLevel(event, 'beginner')}
                className={
                  this.getCheckedLevel('beginner')
                    ? 'tag domain-selected level-objectif'
                    : 'tag is-notselected level-objectif'
                }
              >
                {' '}Découvrir{' '}
              </span>
              <span
                role="presentation"
                onClick={event => this.submitLevel(event, 'expert')}
                className={
                  this.getCheckedLevel('expert')
                    ? 'tag domain-selected level-objectif'
                    : 'tag is-notselected level-objectif'
                }
              >
                {' '}Appronfondir{' '}
              </span>
            </div>
            : ''}
        </div>
      </div>
    );
  }
}

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
