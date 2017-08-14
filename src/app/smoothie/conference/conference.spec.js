import React from 'react';
import { shallow } from 'enzyme';
import Conference from './conference.component';

const props = {
  timeBegin: '10',
  timeEnd: '12',
  conferences: [{}],
};

describe('conference.component', () => {
  it('should render conference.component', () => {
    const conference = shallow(<Conference {...props} />);
    expect(conference.getNodes()).toMatchSnapshot();
  });
});
