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
    this.submitLevel = this.submitLevel.bind(this);
    this.toogleChecked = this.toogleChecked.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);

    this.state = {
      domain: {
        domain: this.props.item.id,
        level: 'noob',
      },
      hover: false,
    };
  }

  getCheckedLevel(level) {
    let checked = false;
    _.forEach(this.props.domains, (element) => {
      if (element.domain === this.props.item.id && element.level === level) {
        checked = true;
      }
    });
    return checked;
  }

  isChecked() {
    let checked = false;
    _.forEach(this.props.domains, (element) => {
      if (element.domain === this.props.item.id) {
        checked = true;
      }
    });
    return checked;
  }


  submitLevel(e, level) {
    e.stopPropagation();
    if (!this.getCheckedLevel(level)) {
      if (this.isChecked()) {
        this.setState({ domain: { domain: this.props.item.id, level } },
          () => {
            this.props.updateLevel(this.state.domain);
          },
        );
      } else {
        this.setState({ domain: { domain: this.props.item.id, level } },
          () => {
            this.toogleChecked();
          },
        );
      }
    } else {
      this.toogleChecked();
    }
  }
  toogleChecked() {
    if (!this.isChecked()) {
      this.props.addDomain(this.state.domain);
    } else {
      this.props.removeDomain(this.state.domain);
    }
  }

  onMouseEnterHandler() {
    this.setState({
      hover: true,
    });
  }

  onMouseLeaveHandler() {
    this.setState({
      hover: false,
    });
  }


  render() {
    return (
      <div
        // className={this.isChecked() ? 'blockDomain domain-selected' : 'blockDomain'}
        className="blockDomain"
        onClick={this.toogleChecked}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        style={ this.isChecked()  ? { backgroundImage: `url(img/domains/${this.props.item.id}.png)`} : { backgroundImage: `url(./img/domains/${this.props.item.id}-disabled.png)` } }
      >
        <div>
          <h1
            style={this.isChecked() ? { backgroundColor: '#E6421C'} : { backgroundColor: ''}}
          > {this.props.item.libelle} </h1>
          { !this.isChecked()  ?  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores autem dicta dignissimos dolore dolorum ea facere, impedit in iste molestiae, nisi nostrum perferendis, placeat quod sapiente tempora velit.</p> : '' }
          {this.isChecked() || this.state.hover
            ? <div className="groupBtnLevel">
              <span onClick={event => this.submitLevel(event, 'noob')} className={this.getCheckedLevel('noob') ? 'tag domain-selected level-objectif' : 'tag is-notselected level-objectif'} > Découvrir </span>
              <span onClick={event => this.submitLevel(event, 'confirmed')} className={this.getCheckedLevel('confirmed') ? 'tag domain-selected level-objectif' : 'tag is-notselected level-objectif'} > Appronfondir </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  CheckboxDomainComponent,
);
