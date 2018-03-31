import axios from 'axios/index';
import {
  GET_SKILL_FAILED,
  GET_SKILL_REQUESTED,
  GET_SKILL_SUCCEEDED,
} from 'containers/SkillsPage/constants';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_EXERCISE_FAILED,
  GET_EXERCISE_REQUESTED,
  GET_EXERCISE_SUCCEEDED,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    watchGetExercise(),
    watchGetSkills(),
  ]);
}


export function* watchGetExercise() {
  yield takeEvery(GET_EXERCISE_REQUESTED, getExercises);
}

export function* getExercises(action) {
  try {
    const exercises = yield call(axios.get, action.payload.url);

    yield put({
      type: GET_EXERCISE_SUCCEEDED,
      ...exercises.data,
    });
  } catch (error) {
    yield put({ type: GET_EXERCISE_FAILED, error });
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
