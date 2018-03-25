/**
*
* SkillList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

class SkillList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const skills = this.props.skills.map((skill) => (
      <Card key={skill.id}>
        <CardBody>
          <strong>{ skill.name }</strong>
          <SkillList skills={skill.children} />
        </CardBody>
      </Card>
    ));
    return (
      <div>
        { skills }
      </div>
    );
  }
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    children: PropTypes.array,
  })),
};

export default SkillList;
