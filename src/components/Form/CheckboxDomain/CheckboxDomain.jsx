
import React, { Component } from 'react';
import { connect }      from 'react-redux'
import * as formActions  from '../../../actions/formActions'

/**
 * Component for one keyword's checkbox
 */
class CheckboxDomainComponent extends Component {
  constructor(props) {
    super(props);
    this.submitLevel= this.submitLevel.bind(this);
    this.toogleChecked= this.toogleChecked.bind(this);
    this.isChecked= this.isChecked.bind(this);
    this.handleMouseEnter= this.handleMouseEnter.bind(this);
    this.handleMouseLeave= this.handleMouseLeave.bind(this);

    this.state = {
      domain:{
        domain: this.props.item.id,
        level: 'noob'
      },
      hover: false
    };
  }

  handleMouseEnter(){
    if(this.isChecked()) this.setState({hover: true})
  }

  handleMouseLeave() {
    this.setState({hover: false})
  }

  submitLevel(e) {
    this.setState({
      domain: {domain: this.props.item.id, level: e.currentTarget.value}
    }, function () {
      this.props.updateLevel(this.state.domain);
    });
  }

  toogleChecked(e) {
      if( e.target.checked ){
        this.props.addDomain(this.state.domain);
        this.setState({hover: true})
      }
      else{
        this.props.removeDomain(this.state.domain);
        this.setState({hover: false})
      }
  }

  isChecked(){
    let checked = false;
    this.props.state.domains.forEach((element) => {
      if(element.domain === this.props.item.id){
        checked = true;
      }
    });
    return checked;
  }

  getCheckedLevel(level){
    let checked = false;
    this.props.state.domains.forEach((element) => {
      if(element.domain === this.props.item.id && element.level === level){
        checked = true;
      }
    });
    return checked;
  }

  render() {
    return (
      <div
           onMouseEnter={this.handleMouseEnter}
           onMouseLeave={this.handleMouseLeave}>
        <div>
          { this.state.hover ?
            <div >
              <input type="radio" name={this.props.item.id} value="noob"
                     onChange={this.submitLevel}
                     checked={ this.getCheckedLevel('noob')
                     }
              /> Débutant
              <input type="radio" name={this.props.item.id} value="expert"
                     onChange={this.submitLevel}
                     checked={ this.getCheckedLevel('expert')
                     }
              /> Expert
            </div> : ''
          }
          <input
            onChange={this.toogleChecked}
            name={this.props.item.id}
            type="checkbox"
            checked={ this.isChecked()}
          />
          {this.props.item.libelle}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: { domains: state.form.domains }
});

const mapDispatchToProps = (dispatch) => ({
  addDomain: (domain) => {
    dispatch(formActions.addDomain(domain))
  },
  removeDomain: (domain) => {
    dispatch(formActions.removeDomain(domain))
  },
  updateLevel: (domain) => {
    dispatch(formActions.updateLevel(domain))
  }
});

const CheckboxDomain = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxDomainComponent);

export default CheckboxDomain

