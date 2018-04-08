import { fromJS } from 'immutable';
import { GET_LEVEL_SUCCEEDED } from './constants';

const initialState = fromJS({
  levels: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEVEL_SUCCEEDED:
      return state.set('levels', fromJS(action.data));
    default:
      return state;
  }
}

export default homePageReducer;
