import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import Sidebar from '../../components/Sidebar';

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
      <Sidebar />
    </Provider>,
  );
});

describe('Sidebar component', () => {
  describe('Smoke tests', () => {
    it('Should render the sidebar component', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
