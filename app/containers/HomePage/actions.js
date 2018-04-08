import {
  GET_LEVEL_REQUESTED,
  GET_LEVEL_URL,
} from 'containers/HomePage/constants';

export function getLevels() {
  return {
    type: GET_LEVEL_REQUESTED,
    payload: {
      url: GET_LEVEL_URL,
    },
  };
}
