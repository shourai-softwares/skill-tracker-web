import { createSelector } from 'reselect';

const selectAuthDomain = (state) => state.get('auth');

const makeSelectApiKey = () => createSelector(
  selectAuthDomain,
  (substate) => {
    const apiKey = substate.get('apiKey');
    if (apiKey) {
      return apiKey.toJS();
    }

    return null;
  }
);

export {
  makeSelectApiKey,
};
export default selectAuthDomain;
