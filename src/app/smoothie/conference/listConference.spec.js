import React from 'react';
import { shallow } from 'enzyme';
import ListConference from './listConference.component';

const props = {
  day: {
    eight: [],
    ten: [],
    fourteen: [],
    sixteen: [],
  },
};

describe('listConference.component', () => {
  it('should render listConference.component', () => {
    const listConference = shallow(<ListConference {...props} />);
    expect(listConference).toMatchSnapshot();
  });
});
