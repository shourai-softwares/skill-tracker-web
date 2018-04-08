/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectSkills } from 'containers/App/selectors';
import { getSkills } from 'containers/SkillsPage/actions';
import makeSelectLevels from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getLevels } from './actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSkills();
    this.props.getLevels();
  }

  getSkillNameFor = (level) => {
    const skill = this.props.skills.find((s) => (s.id === level.skill.id));
    return skill.name;
  };

  render() {
    const data = this.props.levels.map((level) => {
      const chartData = {
        name: this.getSkillNameFor(level),
        level: level.level,
      };
      return chartData;
    });

    return (
      <div>
        <BarChart width={500} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="level" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

HomePage.propTypes = {
  getLevels: PropTypes.func.isRequired,
  getSkills: PropTypes.func.isRequired,
  levels: PropTypes.array,
  skills: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  levels: makeSelectLevels(),
  skills: makeSelectSkills(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLevels: () => dispatch(getLevels()),
    getSkills: () => dispatch(getSkills()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);

