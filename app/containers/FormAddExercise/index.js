/**
 *
 * FormAddExercise
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { addExercise } from 'containers/ExercisesPage/actions';

export class FormAddExercise extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    skill: 0,
    intensity: 1,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addExercise(this.state);
  };

  render() {
    const skillList = this.props.skills.map((skill) => (
      <option key={skill.id} value={skill.id}>{ skill.name }</option>
    ));

    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label>Skill</Label>
            <Input
              type="select"
              name="parent"
              value={this.state.skill}
              onChange={(event) => { this.setState({ skill: event.currentTarget.value }); }}
            >
              <option value="" disabled>(Escolha Uma Skill)</option>
              { skillList }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Intensidade</Label>
            <Input
              type="number"
              name="intensity"
              value={this.state.intensity}
              min="1"
              max="100"
              onChange={(event) => { this.setState({ intensity: event.currentTarget.value }); }}
            />
          </FormGroup>
          <Input type="submit" />
        </Form>
      </div>
    );
  }
}

FormAddExercise.propTypes = {
  skills: PropTypes.array.isRequired,
  addExercise: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    addExercise: (newExercise) => dispatch(addExercise(newExercise)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(FormAddExercise);
