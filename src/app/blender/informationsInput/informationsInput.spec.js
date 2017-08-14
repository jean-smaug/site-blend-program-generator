import React from 'react';
import { shallow } from 'enzyme';
import { InformationsInputComponent } from './informationsInputcomponent';
import * as formActions from '../blender.action';

const informations = {
  firstname: '',
  lastname: '',
  email: '',
  isValidEmail: true,
};

describe('InformationsInput.component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<InformationsInputComponent
      addInformations={formActions.addInformations}
      informations={informations}
    />);
  });

  it('should render component', () => {
    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
