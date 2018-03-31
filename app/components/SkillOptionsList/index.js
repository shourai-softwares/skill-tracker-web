/**
*
* SkillOptionsList
*
*/

import React from 'react';
import PropTypes from 'prop-types';


function SkillOptionsList(props) {
  const skills = props.skillTrees.map((skill) => (
    <React.Fragment key={skill.root.id}>
      <option value={skill.root.id}>{props.prepend}{ skill.root.name }</option>
      <SkillOptionsList skillTrees={skill.children} prepend={`${props.prepend}-`} />
    </React.Fragment>
  ));

  return (
    <React.Fragment>
      { skills }
    </React.Fragment>
  );
}

SkillOptionsList.defaultProps = {
  prepend: '',
};

SkillOptionsList.propTypes = {
  prepend: PropTypes.string.isRequired,
  skillTrees: PropTypes.array,
};

export default SkillOptionsList;
