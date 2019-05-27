import errorBoxReducer, { Creators as ErroxBoxActions } from '../../store/ducks/error';

const INITIAL_STATE = {
  error: { visible: true, message: null },
};

describe('ErroBox Reducer', () => {
  it('Should be able to hide error box element', () => {
    const state = errorBoxReducer(INITIAL_STATE, ErroxBoxActions.hideError());
    expect(state.visible).toBe(false);
  });

  it('Should set the message in the state', () => {
    const TEST_MESSAGE = 'Test message';
    const state = errorBoxReducer(INITIAL_STATE, ErroxBoxActions.setError(TEST_MESSAGE));

    expect(state.message).toBe(TEST_MESSAGE);
    expect(state.visible).toBe(true);
  });
});
