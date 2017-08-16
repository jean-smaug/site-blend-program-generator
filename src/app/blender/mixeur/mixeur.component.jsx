// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, ToastMessage } from 'react-toastr';
import randomString from 'randomstring';
import { filterByLevelAndDomain, orderConferences } from '../../../lib/dataFilter.lib';
import { getConferences, writeStore } from '../../../lib/database';
import { mixConferencesAction } from '../../smoothie/smoothie.action';

/**
 * Component for Submit button to mix
 */
export class MixeurComponent extends Component {
  props: {
    addConference: () => void,
    form: Object,
  };

  submitBtn = async () => {
    if (this.props.form.informations.isValidEmail) {
      const conferences = (await getConferences()) || [];
      const { addConference, form } = this.props;
      const orderedConferences = orderConferences(
        filterByLevelAndDomain(conferences, form.domains),
      );

      // const userKey = randomString.generate({
      //   length: 4,
      //   capitalization: 'uppercase',
      // });

      writeStore('userKey', { ...orderedConferences, blender: form });

      addConference(orderedConferences);
    } else {
      this.toastError.error(
        "L'email que vous avez renseigné a un format incorrect.",
        'Attention !',
        {
          timeOut: 7000,
          extendedTimeOut: 1000,
          closeButton: true,
        },
      );
    }
  };

  render() {
    return (
      <div>
        <ToastContainer
          ref={(input) => {
            this.toastError = input;
          }}
          toastMessageFactory={React.createFactory(ToastMessage.animation)}
          className="toast-top-full-width"
        />
        <input className="mix-btn" type="button" onClick={this.submitBtn} value="GO MIX" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  addConference: (word) => {
    dispatch(mixConferencesAction(word));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MixeurComponent);
