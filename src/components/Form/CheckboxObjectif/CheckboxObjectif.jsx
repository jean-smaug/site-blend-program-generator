import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as formActions from '../../../actions/formActions'

/**
 * Component for one objectif's checkbox
 */

class CheckboxObjectifComponent extends Component {
  constructor (props) {
    super(props)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox (e) {
    if (e.target.checked) this.props.addObjectif(this.props.item.id)
    else this.props.removeObjectif(this.props.item.id)
  }

  render () {
    return (
      <div>
        <div>
          <input
            onChange={this.toggleCheckbox}
            name={this.props.item.id}
            type='checkbox'
            checked={_.includes(this.props.state.objectifs, this.props.item.id)}
          />
          {this.props.item.libelle}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: { objectifs: state.form.objectifs }
})

const mapDispatchToProps = dispatch => ({
  addObjectif: (objectif) => {
    dispatch(formActions.addObjectif(objectif))
  },
  removeObjectif: (objectif) => {
    dispatch(formActions.removeObjectif(objectif))
  }
})

const CheckboxObjectif = connect(mapStateToProps, mapDispatchToProps)(
  CheckboxObjectifComponent
)

export default CheckboxObjectif
