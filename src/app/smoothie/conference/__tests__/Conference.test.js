import React from 'react';
import { shallow } from 'enzyme';
import Conference from '../conference.component';

describe('conference component', () => {
  it('should contain a switchButton and lockButton', () => {
    const props = {
      name: 'foo',
      timeBegin: '10',
      timeEnd: '12',
    };

    const conference = shallow(<Conference {...props} />);
    expect(conference.find('.switchButton').length).toBe(1);
    expect(conference.find('.lockButton').length).toBe(1);
  });
});
