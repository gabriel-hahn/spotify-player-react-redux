import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import Player from '../../src/components/Player';

const mockStore = createStore();

const INITIAL_STATE = {
  player: {
    podcast: {
      tracks: [{ id: 1, artwork: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png' }],
    },
    current: 1,
  },
};

const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Provider store={store}>
      <Player />
    </Provider>,
  );
});

describe('Player component', () => {
  it('Smoke tests', () => {
    expect(wrapper.exists());
  });
});
