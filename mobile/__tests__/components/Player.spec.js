import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRenderer from 'react-test-renderer';

import Player from '../../src/components/Player';

const mockStore = createStore();

const INITIAL_STATE = {
  player: {
    podcast: {
      tracks: [
        {
          id: 1,
          artwork: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png',
          title: 'Welcome to the Jungle',
          artist: 'Guns n Roses',
        },
      ],
    },
    playing: true,
    current: 1,
  },
};

const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRenderer.create(
    <Provider store={store}>
      <Player />
    </Provider>,
  );
});

describe('Player component', () => {
  describe('Smoke tests', () => {
    it('Should render correctly', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  describe('Component structure', () => {
    it('Should have the correct uri artwork', () => {
      expect(wrapper.root.findByType('Image').props.source.uri).toEqual(
        'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png',
      );
    });

    it('Should have the correct title of music', () => {
      expect(wrapper.root.findAllByType('Text')[0].props.children).toEqual('Welcome to the Jungle');
    });

    it('Should have the correct artist of music below title', () => {
      expect(wrapper.root.findAllByType('Text')[1].props.children).toEqual('Guns n Roses');
    });
  });
});
