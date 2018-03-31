import { createSelector } from 'reselect';

/**
 * Direct selector to the skillsPage state domain
 */
const selectSkillsPageDomain = (state) => state.get('skillsPage');

const makeSelectSkillTrees = () => createSelector(
  selectSkillsPageDomain,
  (substate) => substate.get('skillTrees').toJS()
);

export {
  selectSkillsPageDomain,
  makeSelectSkillTrees,
};
export default makeSelectSkillTrees;
