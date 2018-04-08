import { createSelector } from 'reselect';

const selectHomePageDomain = (state) => state.get('homePage');

const makeSelectLevels = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('levels').toJS()
);

export {
  selectHomePageDomain,
  makeSelectLevels,
};
export default makeSelectLevels;
