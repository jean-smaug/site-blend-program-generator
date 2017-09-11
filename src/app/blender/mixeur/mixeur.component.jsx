// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, ToastMessage } from 'react-toastr';
import { filterConferences, orderConferences, filterByTags } from '../../../lib/dataFilter.lib';
import { getConferences, writeStore } from '../../../lib/database';
import { mixConferencesAction } from '../../smoothie/smoothie.action';
import { Conferences } from '../../smoothie/smoothie.type';
import { setConferencesStore, setKeyStore, remove, isStore } from '../../../lib/localStorage.lib';

/**
 * Component for Submit button to mix
 */
export class MixeurComponent extends Component {
  props: {
    addConference: (orderedConferences: Conferences) => void,
    form: Object,
  };

  submitBtn = async () => {
    if (this.props.form.informations.isValidEmail) {
      const conferences = (await getConferences()) || [];
      const { addConference, form } = this.props;
      const orderedConferences = orderConferences(
        filterConferences(conferences, form.domains, form.keywords),
      );
      console.log('tags', filterByTags(conferences, form.keywords));
      console.log('tags', conferences, form.keywords);

      // setKeyStore(await writeStore({ smoothie: orderedConferences, blender: form }));
      // if (isStore('isAlreadyShow')) remove('isAlreadyShow');
      // addConference(orderedConferences);
      // setConferencesStore({
      //   dayOne: orderedConferences.dayOne,
      //   dayTwo: orderedConferences.dayTwo,
      // });
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
