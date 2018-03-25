/*
 *
 * SkillsPage actions
 *
 */

import {
  ADD_SKILL_REQUESTED,
  ADD_SKILL_URL,
  GET_SKILL_REQUESTED,
  GET_SKILL_URL,
} from './constants';

export function addSkill(newSkill) {
  return {
    type: ADD_SKILL_REQUESTED,
    payload: {
      url: ADD_SKILL_URL,
    },
    newSkill,
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
