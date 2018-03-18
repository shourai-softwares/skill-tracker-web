/**
*
* SkillList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SkillList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const skills = this.props.skills.map((skill) => (
      <ListGroupItem>{ skill }</ListGroupItem>
    ));
    return (
      <ListGroup flush>
        { skills }
      </ListGroup>
    );
  }
}

SkillList.propTypes = {
  skills: PropTypes.array,
};

export default SkillList;
