/**
 *
 * ExercisesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSkills } from 'containers/App/selectors';
import { getSkills } from 'containers/SkillsPage/actions';
import makeSelectExercisesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getExercises } from './actions';

export class ExercisesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSkills();
    this.props.getExercises();
  }

  getSkillNameFor(exercise) {
    const skill = this.props.skills.find((s) => (s.id === exercise.skill.id));
    return skill.name;
  }

  render() {
    const exercises = this.props.exercises.map((exercise) => (
      <ListGroupItem key={exercise.id}>
        { this.getSkillNameFor(exercise) } - { exercise.intensity }
      </ListGroupItem>
    ));

    return (
      <ListGroup>
        { exercises }
      </ListGroup>
    );
  }
}

ExercisesPage.propTypes = {
  getExercises: PropTypes.func.isRequired,
  getSkills: PropTypes.func.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  exercises: makeSelectExercisesPage(),
  skills: makeSelectSkills(),
});

function mapDispatchToProps(dispatch) {
  return {
    getExercises: () => dispatch(getExercises()),
    getSkills: () => dispatch(getSkills()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'exercisesPage', reducer });
const withSaga = injectSaga({ key: 'exercisesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExercisesPage);
