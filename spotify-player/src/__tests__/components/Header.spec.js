import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';

describe('Header Component', () => {
  describe('Smoke tests', () => {
    it('Should render the header element', () => {
      const wrapper = mount(<Header />);
      expect(wrapper.find('header').exists()).toBe(true);
    });
  });
});
