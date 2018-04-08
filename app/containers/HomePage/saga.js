import axios from 'axios';
import { GET_SKILL_FAILED, GET_SKILL_REQUESTED, GET_SKILL_SUCCEEDED } from 'containers/SkillsPage/constants';
import { call, takeEvery, put, all } from 'redux-saga/effects';

// Individual exports for testing
import {
  GET_LEVEL_REQUESTED,
  GET_LEVEL_FAILED,
  GET_LEVEL_SUCCEEDED,
} from './constants';

export default function* defaultSaga() {
  yield all([
    watchGetLevels(),
    watchGetSkills(),
  ]);
}

export function* watchGetLevels() {
  yield takeEvery(GET_LEVEL_REQUESTED, getLevels);
}

export function* getLevels(action) {
  try {
    const levels = yield call(axios.get, action.payload.url);

    yield put({
      type: GET_LEVEL_SUCCEEDED,
      ...levels.data,
    });
  } catch (error) {
    yield put({ type: GET_LEVEL_FAILED, error });
  }
}

export function* watchGetSkills() {
  yield takeEvery(GET_SKILL_REQUESTED, getSkills);
}

export function* getSkills(action) {
  try {
    const skills = yield call(axios.get, action.payload.url);

    yield put({
      type: GET_SKILL_SUCCEEDED,
      ...skills.data,
    });
  } catch (error) {
    yield put({ type: GET_SKILL_FAILED, error });
  }
}
