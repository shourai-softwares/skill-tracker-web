import { fromJS } from 'immutable';

const initialState = fromJS({
  apiKey: null,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
