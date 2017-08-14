import React from 'react';
import { shallow } from 'enzyme';

import { SwitchComponent } from './switch.component';

const conferences = [{}];

describe('switch component', () => {
  it('should render the switch component', () => {
    const Switch = shallow(<SwitchComponent currentConferenceId={0} conferences={conferences} />);
    expect(Switch).toMatchSnapshot();
  });

  // it('detect click button', () => {
  //   const Switch = shallow(
  //     <SwitchComponent id={0} conferences={conferences} />,
  //   );
  // });
});
