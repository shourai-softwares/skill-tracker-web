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
import makeSelectExercisesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getExercises } from './actions';

export class ExercisesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getExercises();
  }

  render() {
    const exercises = this.props.exercises.map((exercise) => (
      <ListGroupItem key={exercise.id}>{ exercise.intensity }</ListGroupItem>
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
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  exercises: makeSelectExercisesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getExercises: () => dispatch(getExercises()),
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
