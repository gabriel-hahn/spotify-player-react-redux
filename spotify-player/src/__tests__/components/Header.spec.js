import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Header />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('Header Component', () => {
  describe('Smoke tests', () => {
    it('Should render the header element', () => {
      expect(wrapper.find('header').exists()).toBe(true);
    });

    it('Should have search input', () => {
      expect(wrapper.find('input').prop('placeholder')).toEqual('Search');
    });

    it('Should have avatar element', () => {
      expect(wrapper.find('img').prop('alt')).toEqual('Avatar');
    });
  });
});
