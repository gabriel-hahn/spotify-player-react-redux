import PlayerActions, { reducer } from '../../src/store/ducks/player';

const INITIAL_STATE = {
  podcast: null,
  current: null,
  playing: false,
};

const podcast = {
  tracks: [
    {
      id: 3,
      artwork: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png',
      title: 'Welcome to the Jungle',
      artist: 'Guns n Roses',
    },
    {
      id: 4,
      artwork: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png',
      title: 'Patience',
      artist: 'Guns n Roses',
    },
  ],
};

describe('Player Reducer', () => {
  it('Should be able to set podcast loaded', () => {
    const state = reducer(INITIAL_STATE, PlayerActions.setPodcastSuccess(podcast));
    expect(state.current).toEqual(3);
    expect(state.podcast).toEqual(podcast);
  });

  it('Should be able to set the current song', () => {
    const state = reducer(INITIAL_STATE, PlayerActions.setCurrent(4));
    expect(state.current).toEqual(4);
  });

  it('Should be able to play the song', () => {
    const state = reducer(INITIAL_STATE, PlayerActions.play());
    expect(state.playing).toBeTruthy();
  });

  it('Should be able to pause the song', () => {
    const state = reducer(INITIAL_STATE, PlayerActions.pause());
    expect(state.playing).toBeFalsy();
  });

  it('Should be able to reset the store', () => {
    const state = reducer(INITIAL_STATE, PlayerActions.reset());
    expect(state.current).toBeNull();
    expect(state.podcast).toBeNull();
    expect(state.playing).toBeFalsy();
  });
});
