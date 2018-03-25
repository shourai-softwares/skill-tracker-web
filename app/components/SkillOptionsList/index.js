/**
*
* SkillOptionsList
*
*/

import React from 'react';
import PropTypes from 'prop-types';


function SkillOptionsList(props) {
  const skills = props.skills.map((skill) => (
    <React.Fragment key={skill.id}>
      <option value={skill.id}>{props.prepend}{ skill.name }</option>
      <SkillOptionsList skills={skill.children} prepend={`${props.prepend}-`} />
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
  skills: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default SkillOptionsList;
