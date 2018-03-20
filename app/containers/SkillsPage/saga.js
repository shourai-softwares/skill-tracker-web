import axios from 'axios';
import { call, takeEvery, put, all } from 'redux-saga/effects';
import {
  GET_SKILL_REQUESTED,
  GET_SKILL_SUCCEEDED,
  GET_SKILL_FAILED,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    watchGetSkills(),
  ]);
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
