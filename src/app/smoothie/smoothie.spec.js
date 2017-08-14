import React from 'react';
import { shallow } from 'enzyme';
import { SmoothieComponent } from './smoothie.component';
import { addConferenceAction, removeConferences } from './smoothie.action';
import { MIX_CONFERENCES, REMOVE_CONFERENCES } from './smoothie.constant';

const props = {
  dayOne: {},
  dayTwo: {},
};

describe('Smoothie component', () => {
  it('should render Smoothie Component', () => {
    const smoothie = shallow(<SmoothieComponent dayOne={props.dayOne} dayTwo={props.dayTwo} />);
    expect(smoothie).toMatchSnapshot();
  });
});

describe('smoothie.actions', () => {
  it('should create the action removeConferences', () => {
    const expected = { type: REMOVE_CONFERENCES };
    expect(removeConferences()).toEqual(expected);
  });

  it('should create the action addConference', () => {
    const conferences = { dayOne: { foo: 'bar' }, dayTwo: { foo: 'tball' } };
    const expected = {
      type: MIX_CONFERENCES,
      data: {
        dayOne: { foo: 'bar' },
        dayTwo: { foo: 'tball' },
      },
    };
    expect(addConferenceAction(conferences)).toEqual(expected);
  });
});

// TODO : problème avec le localstorage
// describe('smoothie.reducer', () => {
//   it('should render initial state', () => {
//     expect(smoothieReducer(undefined, {})).toEqual({
//       dayOne: {},
//       dayTwo: {},
//     });
//   });
// });
