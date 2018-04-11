/**
*
* SkillList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Input } from 'reactstrap';
import SuccessButton from 'components/SuccessButton';

class SkillList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      adding: false,
      newSkillName: '',
    };
  }

  showInput = () => {
    this.setState({ adding: true });
  };

  typeName = (event) => {
    this.setState({ newSkillName: event.currentTarget.value });
  };

  saveSkill = () => {
    this.setState({ adding: false });
    this.props.addSkill({
      name: this.state.newSkillName,
      parent: this.props.parent,
    });
  };

  render() {
    const skillTrees = this.props.skillTrees.map((skillTree) => (
      <Card className="mb-3" key={skillTree.root.id}>
        <CardBody>
          <strong>{ skillTree.root.name }</strong>
          <SkillList
            addSkill={this.props.addSkill}
            skillTrees={skillTree.children}
            parent={skillTree.root.id}
          />
        </CardBody>
      </Card>
    ));

    const innerContent = this.state.adding ? (
      <Card>
        <CardBody>
          <React.Fragment>
            <Input type="text" onChange={this.typeName} value={this.state.newSkillName} />
            <SuccessButton onClick={this.saveSkill}>Salvar</SuccessButton>
          </React.Fragment>
        </CardBody>
      </Card>
    ) : (
      <SuccessButton onClick={this.showInput}>
        + Adicionar Skill
      </SuccessButton>
    );

    return (
      <div>
        { skillTrees }
        { innerContent }
      </div>
    );
  }
}

SkillList.propTypes = {
  addSkill: PropTypes.func.isRequired,
  skillTrees: PropTypes.arrayOf(PropTypes.shape({
    root: PropTypes.object,
    children: PropTypes.array,
  })),
  parent: PropTypes.number,
};

export default SkillList;
