import React from 'react';
import { shallow } from 'enzyme';
import ListConference from '../ListConference';

const conferences = [
  {
    _id: '596d113232ef1731e3f8f520',
    name: '',
    level: 'tech',
    domain: 'design',
    dateBegin: 'Fri Dec 01 2017 14:35:51 GMT+0100 (Paris, Madrid)',
    dateEnd: 'Sat Dec 02 2017 02:08:54 GMT+0100 (Paris, Madrid)',
  },
  {
    _id: '596d1132775df778c23a7bee',
    name: '',
    level: 'noob',
    domain: 'blend',
    dateBegin: 'Fri Dec 01 2017 17:15:55 GMT+0100 (Paris, Madrid)',
    dateEnd: 'Fri Dec 01 2017 17:34:55 GMT+0100 (Paris, Madrid)',
  },
  {
    _id: '596d11327391f17fa752448e',
    name: '',
    level: 'tech',
    domain: 'tech',
    dateBegin: 'Fri Dec 01 2017 14:46:55 GMT+0100 (Paris, Madrid)',
    dateEnd: 'Sat Dec 02 2017 08:05:20 GMT+0100 (Paris, Madrid)',
  },
];

describe('conference component', () => {
  it('should ', () => {
    const conference = shallow(<ListConference conferences={conferences} />);
    expect(conference.find('Conference').length).toBe(3);
  });
});
