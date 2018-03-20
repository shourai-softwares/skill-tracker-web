/*
 *
 * SkillsPage actions
 *
 */

import {
  ADD_SKILL_ACTION,
  GET_SKILL_REQUESTED,
  GET_SKILL_URL,
} from './constants';

export function addSkill() {
  return {
    type: ADD_SKILL_ACTION,
  };
}

export function getSkills() {
  return {
    type: GET_SKILL_REQUESTED,
    payload: {
      url: GET_SKILL_URL,
    },
  };
}
