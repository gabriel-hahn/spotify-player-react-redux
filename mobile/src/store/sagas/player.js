import {
  call, put, select, take,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import TrackPlayer from 'react-native-track-player';

import PlayerActions from '~/store/ducks/player';

function* trackChanged() {
  const channel = eventChannel((emitter) => {
    const onTrackChange = TrackPlayer.addEventListener('playback-track-changed', emitter);

    return () => onTrackChange.remove();
  });

  try {
    while (true) {
      const { nextTrack } = yield take(channel);

      yield put(PlayerActions.setCurrent(nextTrack));
    }
  } finally {
    channel.close();
  }
}

export function* init() {
  yield call(TrackPlayer.setupPlayer);

  // capabilities: iOS , notificationCapabilities: Android, compactCapabilities: Control center
  TrackPlayer.updateOptions({
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    notificationCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  });

  TrackPlayer.addEventListener('playback-track-changed', console.log);
  TrackPlayer.addEventListener('playback-state', console.log);
}

export function* setPodcast({ podcast, episodeId }) {
  const currentPodcast = yield select(state => state.player.podcast);

  if (!currentPodcast || podcast.id !== currentPodcast.id) {
    yield call(TrackPlayer.stop);
    yield call(TrackPlayer.reset);

    yield call(TrackPlayer.add, [...podcast.tracks]);
    yield put(PlayerActions.setPodcastSuccess(podcast));
  }

  if (episodeId) {
    yield call(TrackPlayer.skip, episodeId);
    yield put(PlayerActions.setCurrent(episodeId));
  }

  yield put(PlayerActions.play());
  yield call(trackChanged);
}

export function* play() {
  yield call(TrackPlayer.play);
}

export function* pause() {
  yield call(TrackPlayer.pause);
}

export function* next() {
  const player = yield select(state => state.player);
  const currentIndex = player.podcast.tracks.findIndex(episode => episode.id === player.current);
  const nextEpisode = player.podcast.tracks[currentIndex + 1];

  if (nextEpisode) {
    yield call(TrackPlayer.skipToNext);
    yield put(PlayerActions.play());
    yield put(PlayerActions.setCurrent(nextEpisode.id));
  }
}

export function* prev() {
  const player = yield select(state => state.player);
  const currentIndex = player.podcast.tracks.findIndex(episode => episode.id === player.current);
  const previewEpisode = player.podcast.tracks[currentIndex - 1];

  if (previewEpisode) {
    yield call(TrackPlayer.skipToPrevious);
    yield put(PlayerActions.play());
    yield put(PlayerActions.setCurrent(previewEpisode.id));
  }
}

export function* reset() {
  yield call(TrackPlayer.stop);
  yield call(TrackPlayer.reset);
  yield put(PlayerActions.reset());
}
