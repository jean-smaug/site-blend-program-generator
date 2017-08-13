// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByLevelAndDomain, orderConferences } from '../../../lib/dataFilter.lib';
import { getConferences } from '../../../lib/database';
import { addConferenceAction } from '../../smoothie/smoothie.action';

/**
 * Component for Submit button to mix
 */
export class MixeurComponent extends Component {
  props: {
    addConference: () => void,
    form: Object,
  };

  submitBtn = async () => {
   if(this.props.form.informations.isValidEmail){
    const conferences = (await getConferences()) || [];
    const { addConference, form } = this.props;

    addConference(orderConferences(filterByLevelAndDomain(conferences, form.domains)));
   } else {
      alert("Format de l'email incorrect"); //TODO POPUP ERREUR
   }
  };

  render() {
    return (
      <div>
        <input
          style={{
            height: '100px',
            width: '100px',
            borderRadius: '50%',
            boxShadow: '2px 2px 8px #aaa',
            backgroundColor: '#E6421D',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2em',
          }}
          type="button"
          onClick={this.submitBtn}
          value="GO MIX"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  addConference: (word) => {
    dispatch(addConferenceAction(word));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MixeurComponent);
