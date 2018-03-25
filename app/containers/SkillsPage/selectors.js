import { createSelector } from 'reselect';

/**
 * Direct selector to the skillsPage state domain
 */
const selectSkillsPageDomain = (state) => state.get('skillsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SkillsPage
 */

const makeSelectSkillsPage = () => createSelector(
  selectSkillsPageDomain,
  (substate) => substate.get('skills').toJS()
);

export default makeSelectSkillsPage;
export {
  selectSkillsPageDomain,
};
