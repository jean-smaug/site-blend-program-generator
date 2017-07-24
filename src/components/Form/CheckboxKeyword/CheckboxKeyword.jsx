import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as formActions from '../../../actions/formActions';

/**
 * Component for one theme's checkbox
 */

class CheckboxKeywordComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox(e) {
    if (e.target.checked) this.props.addKeyword(this.props.item.id);
    else this.props.removeKeyword(this.props.item.id);
  }

  render() {
    return (
      <div>
        <div>
          <input
            onChange={this.toggleCheckbox}
            name={this.props.item.id}
            type="checkbox"
            checked={_.includes(this.props.state.keywords, this.props.item.id)}
          />
          {this.props.item.libelle}
        </div>
      </div>
    );
  }
}

CheckboxKeywordComponent.propTypes = {
  addKeyword: PropTypes.func.isRequired,
  removeKeyword: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    libelle: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    keywords: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  state: { keywords: state.form.keywords },
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
