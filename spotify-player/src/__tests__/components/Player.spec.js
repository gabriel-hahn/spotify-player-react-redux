import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import Player, { msToTime } from '../../components/Player';

const mockStore = createStore();

const INITIAL_STATE = {
  player: {
    status: 'PLAYING',
    position: 90,
    duration: 123,
    positionShown: 20,
    currentSong: {
      thumbnail: 'thumbnailtest',
      title: 'title test',
      author: 'author test',
      file: 'file path test',
    },
  },
};

const store = mockStore(INITIAL_STATE);
let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Player />
    </Provider>,
  );
});

describe('Player component', () => {
  describe('Smoke tests', () => {
    it('Should render the player component', () => {
      expect(wrapper.exists());
    });

    it('Should contains Sound component', () => {
      expect(wrapper.find('Sound').exists()).toBe(true);
    });
  });

  describe('Component tunctions test', () => {
    describe('msToTime function', () => {
      it('Should return the corret time', () => {
        expect(msToTime(250000)).toBe('4:10');
      });
    });
  });
});
