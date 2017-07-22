import React from 'react';
import { shallow } from 'enzyme';
import Conference from '../Conference';

describe('Menu component', () => {
  it('should render Menu Component', () => {
    const conference = shallow(<Conference />);
    expect(conference.find('.switchButton')).toBe('button');
    expect(conference.find('.lockButton')).toBe('button');
  });
});
