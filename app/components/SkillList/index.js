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
    const skillTrees = this.props.skillTrees.map((skillTree) => (
      <Card className="mb-3" key={skillTree.root.id}>
        <CardBody>
          <strong>{ skillTree.root.name }</strong>
          <SkillList skillTrees={skillTree.children} />
        </CardBody>
      </Card>
    ));
    return (
      <div>
        { skillTrees }
      </div>
    );
  }
}

SkillList.propTypes = {
  skillTrees: PropTypes.arrayOf(PropTypes.shape({
    root: PropTypes.object,
    children: PropTypes.array,
  })),
};

export default SkillList;
