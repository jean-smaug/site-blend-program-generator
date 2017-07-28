import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../Menu';

describe('Menu component', () => {
  it('should render Menu Component', () => {
    const MenuComponent = shallow(<Menu />);
    expect(MenuComponent).toMatchSnapshot();
  });
});
