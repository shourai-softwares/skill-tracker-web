/**
 *
 * SkillsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Card, CardBody } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSkillsPage from './selectors';
import reducer from './reducer';
import { getSkills } from './actions';
import saga from './saga';
import SkillList from '../../components/SkillList/index';
import FormAddSkill from '../FormAddSkill';

export class SkillsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSkills();
  }

  render() {
    return (
      <div>
        <FormAddSkill skills={this.props.skills} />
        <Card>
          <CardBody>
            <SkillList skills={this.props.skills} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

SkillsPage.propTypes = {
  getSkills: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    children: PropTypes.array,
  })),
};

const mapStateToProps = createStructuredSelector({
  skills: makeSelectSkillsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getSkills: () => dispatch(getSkills()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'skillsPage', reducer });
const withSaga = injectSaga({ key: 'skillsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SkillsPage);
