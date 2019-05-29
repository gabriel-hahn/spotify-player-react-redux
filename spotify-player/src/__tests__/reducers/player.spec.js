import playerReducer, { Creators as PlayerActions } from '../../store/ducks/player';

const INITIAL_STATE = {
  list: [],
  currentSong: null,
  positionShown: null,
  status: 'PLAYING',
  position: null,
  duration: null,
  volume: 100,
};

const INITIAL_STATE_WITH_SONG = {
  list: [{ id: 1, name: 'songtest' }, { id: 2, name: 'songtest2' }],
  currentSong: { id: 1, name: 'songtest' },
  positionShown: null,
  status: 'PLAYING',
  position: 0,
  duration: null,
  volume: 100,
};

describe('Player Reducer', () => {
  it('Should be able to load a song', () => {
    const state = playerReducer(
      INITIAL_STATE,
      PlayerActions.loadSong({ id: 1, name: 'songtest' }, [
        { id: 1, name: 'songtest' },
        { id: 2, name: 'songtest2' },
      ]),
    );
    expect(state).toEqual(INITIAL_STATE_WITH_SONG);
  });

  it('Should be able to play a song', () => {
    const state = playerReducer(INITIAL_STATE_WITH_SONG, PlayerActions.play());
    expect(state).toEqual(INITIAL_STATE_WITH_SONG);
  });

  it('Should be able to pause a song', () => {
    const state = playerReducer(INITIAL_STATE_WITH_SONG, PlayerActions.pause());
    expect(state).toEqual({ ...INITIAL_STATE_WITH_SONG, status: 'PAUSED' });
  });

  it('Should be able to play the next song', () => {
    const state = playerReducer(INITIAL_STATE_WITH_SONG, PlayerActions.next());
    expect(state).toEqual({
      ...INITIAL_STATE_WITH_SONG,
      currentSong: { id: 2, name: 'songtest2' },
    });
  });

  it('Should be able to play the prev song', () => {
    const state = playerReducer(
      { ...INITIAL_STATE_WITH_SONG, currentSong: { id: 2, name: 'songtest2' } },
      PlayerActions.prev(),
    );
    expect(state).toEqual({ ...INITIAL_STATE_WITH_SONG, currentSong: { id: 1, name: 'songtest' } });
  });
});
