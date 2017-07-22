import React from 'react';
import { shallow } from 'enzyme';
import ListConference from '../ListConference';

const conferences = [];

describe('conference component', () => {
  it('should ', () => {
    const conference = shallow(<ListConference conferences={conferences} />);
    expect(conference.find('.switchButton').length).toBe(1);
    expect(conference.find('.lockButton').length).toBe(1);
  });
});
