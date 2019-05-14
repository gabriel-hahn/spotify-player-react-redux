import React from 'react';
import { mount } from 'enzyme';

import LoadingIcon from '../../assets/images/loading.svg';

import Loading from '../../components/Loading';

it('Should render the img component', () => {
  const wrapper = mount(<Loading />);
  expect(wrapper.find('img').exists()).toBe(true);
});

it('Should render the correct image', () => {
  const wrapper = mount(<Loading />);
  expect(wrapper.find('img').prop('src')).toBe(LoadingIcon);
});
