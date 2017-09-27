import React from 'react';
import { shallow } from 'enzyme';
import { ConferenceComponent } from './conference.component';

const props = {
  timeBegin: 10,
  timeEnd: 12,
  conferences: { remaining: [], selected: [] },
  openSwitcher: jest.fn(() => 1),
};

describe('conference.component', () => {
  it('should render conference.component', () => {
    const conference = shallow(<ConferenceComponent {...props} />);
    expect(conference.getNodes()).toMatchSnapshot();
  });
});
