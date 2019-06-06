import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import Browse from '../../pages/browse';

const mockStore = createStore();

const INITIAL_STATE = {
  playlists: {
    data: [{ id: 1, title: 'Music test' }, { id: 2, title: 'Music test 2' }],
  },
  loading: false,
};

const store = mockStore(INITIAL_STATE);
let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Provider store={store}>
      <Browse />
    </Provider>,
  );
});

describe('Browse Page', () => {
  describe('Smoke tests', () => {
    it('Should render the browse page correctly', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
