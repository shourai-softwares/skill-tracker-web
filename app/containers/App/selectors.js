import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectUserData = (state) => state.get('userData');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectSkills = () => createSelector(
  selectUserData,
  (userData) => userData.get('skills').toJS()
);

export {
  makeSelectLocation,
  makeSelectSkills,
};
