import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as formActions from '../../../actions/formActions';

/**
 * Component for one keyword's checkbox
 */
class CheckboxThemeComponent extends Component {
  constructor(props) {
    super(props);
    this.submitLevel = this.submitLevel.bind(this);
    this.toogleChecked = this.toogleChecked.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      theme: {
        libelle: this.props.item.id,
        level: 'noob',
      },
      hover: false,
    };
  }

  getCheckedLevel(level) {
    let checked = false;
    this.props.state.themes.forEach((element) => {
      if (element.libelle === this.props.item.id && element.level === level) {
        checked = true;
      }
    });
    return checked;
  }

  handleMouseEnter() {
    if (this.isChecked()) this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  submitLevel(e) {
    this.setState(
      {
        theme: { libelle: this.props.item.id, level: e.currentTarget.value },
      },
      () => {
        this.props.updateLevel(this.state.theme);
      },
    );
  }

  toogleChecked(e) {
    if (e.target.checked) {
      this.props.addTheme(this.state.theme);
      this.setState({ hover: true });
    } else {
      this.props.removeTheme(this.state.theme);
      this.setState({ hover: false });
    }
  }

  isChecked() {
    let checked = false;
    this.props.state.themes.forEach((element) => {
      if (element.libelle === this.props.item.id) {
        checked = true;
      }
    });
    return checked;
  }

  render() {
    return (
      <div
        style={{ padding: '20px' }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div>
          {this.state.hover
            ? <div>
              <input
                type="radio"
                name={this.props.item.id}
                value="noob"
                onChange={this.submitLevel}
                checked={this.getCheckedLevel('noob')}
              />
              {' '}
                Débutant
                <input
                  type="radio"
                  name={this.props.item.id}
                  value="expert"
                  onChange={this.submitLevel}
                  checked={this.getCheckedLevel('expert')}
                />
              {' '}
                Expert
              </div>
            : ''}
          <input
            onChange={this.toogleChecked}
            name={this.props.item.id}
            type="checkbox"
            checked={this.isChecked()}
          />
          {this.props.item.libelle}
        </div>
      </div>
    );
  }
}

CheckboxThemeComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    libelle: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    themes: PropTypes.array.isRequired,
  }).isRequired,
  updateLevel: PropTypes.func.isRequired,
  removeTheme: PropTypes.func.isRequired,
  addTheme: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: { themes: state.form.themes },
});

const mapDispatchToProps = dispatch => ({
  addTheme: (theme) => {
    dispatch(formActions.addTheme(theme));
  },
  removeTheme: (theme) => {
    dispatch(formActions.removeTheme(theme));
  },
  updateLevel: (theme) => {
    dispatch(formActions.updateLevel(theme));
  },
});

const CheckboxTheme = connect(mapStateToProps, mapDispatchToProps)(
  CheckboxThemeComponent,
);

export default CheckboxTheme;
