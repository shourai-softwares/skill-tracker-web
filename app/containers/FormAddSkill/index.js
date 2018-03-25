/**
 *
 * FormAddSkill
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import SuccessButton from '../../components/SuccessButton/index';
import { addSkill } from '../SkillsPage/actions';

export class FormAddSkill extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    parent: '',
  };

  render() {
    const skills = this.props.skills.map((skill) => (
      <option key={skill.id} value={skill.id}>{ skill.name }</option>
    ));

    return (
      <div>
        <Row>
          <Col xs={{ size: 3, offset: 9 }} >
            <div className="my-2 text-right">
              <SuccessButton onClick={() => console.log('click')}>
                Adicionar Skill
              </SuccessButton>
            </div>
          </Col>
        </Row>
        <Form onSubmit={(event) => { event.preventDefault(); this.props.addSkill(this.state); }}>
          <FormGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => { this.setState({ name: event.currentTarget.value }); }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Pai</Label>
            <Input
              type="select"
              name="parent"
              value={this.state.parent}
              onChange={(event) => { this.setState({ parent: event.currentTarget.value }); }}
            >
              <React.Fragment>
                { skills }
              </React.Fragment>
            </Input>
          </FormGroup>
          <Input type="submit" />
        </Form>
      </div>
    );
  }
}

FormAddSkill.propTypes = {
  addSkill: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};


function mapDispatchToProps(dispatch) {
  return {
    addSkill: (newSkill) => dispatch(addSkill(newSkill)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(FormAddSkill);
