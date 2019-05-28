import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getPlaylists } from '../../store/sagas/playlists';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

const apiMock = new MockAdapter(api);

describe('Playlists Saga', () => {
  it('Should be able to get playlists', async () => {
    const dispatched = [];
    const apiResponse = ['Music 1', 'Music 2'];

    apiMock.onGet('/playlists').reply(200, apiResponse);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getPlaylists,
    ).toPromise();

    expect(dispatched).toContainEqual(PlaylistsActions.getPlaylistsSuccess(apiResponse));
  });
});
