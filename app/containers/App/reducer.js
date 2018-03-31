
import { fromJS } from 'immutable';
import { ADD_SKILL_SUCCEEDED } from 'containers/SkillsPage/constants';

const initialState = fromJS({
  skills: [],
});

function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'app/SkillsPage/GET_SKILL/SUCCEEDED':
      return state.set('skills', fromJS(action.data));
    case ADD_SKILL_SUCCEEDED:
      return state.updateIn(['skills'], (skills) => skills.push(action.data));
    default:
      return state;
  }
}

export default userDataReducer;
