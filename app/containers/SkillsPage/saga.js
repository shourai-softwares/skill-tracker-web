import axios from 'axios';
import { call, takeEvery, put, all } from 'redux-saga/effects';
import {
  GET_SKILL_REQUESTED,
  GET_SKILL_SUCCEEDED,
  GET_SKILL_FAILED,
  ADD_SKILL_REQUESTED,
  ADD_SKILL_SUCCEEDED,
  ADD_SKILL_FAILED,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    watchGetSkills(),
    watchAddSkill(),
  ]);
}

export function* watchAddSkill() {
  yield takeEvery(ADD_SKILL_REQUESTED, addSkill);
}

export function* addSkill(action) {
  try {
    const newSkill = yield call(axios.post, action.payload.url, action.newSkill);

    yield put({
      type: ADD_SKILL_SUCCEEDED,
      ...newSkill.data,
    });
  } catch (error) {
    yield put({ type: ADD_SKILL_FAILED, error });
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
