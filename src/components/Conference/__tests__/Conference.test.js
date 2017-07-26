import React from 'react';
import { shallow } from 'enzyme';
import Conference from '../Conference';

describe('conference component', () => {
  it('should contain a switchButton and lockButton', () => {
    const conference = shallow(<Conference name="foo" />);
    expect(conference.find('.switchButton').length).toBe(1);
    expect(conference.find('.lockButton').length).toBe(1);
  });
});
