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
import makeSelectSkillTrees from 'containers/SkillsPage/selectors';
import FormAddSkill from 'containers/FormAddSkill';
import SkillList from 'components/SkillList';
import reducer from './reducer';
import { getSkillTrees } from './actions';
import saga from './saga';

export class SkillsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSkillTrees();
  }

  render() {
    return (
      <div>
        <FormAddSkill skillTrees={this.props.skillTrees} />
        <Card>
          <CardBody>
            <SkillList skillTrees={this.props.skillTrees} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

SkillsPage.propTypes = {
  getSkillTrees: PropTypes.func.isRequired,
  skillTrees: PropTypes.arrayOf(PropTypes.shape({
    root: PropTypes.object,
    children: PropTypes.array,
  })),
};

const mapStateToProps = createStructuredSelector({
  skillTrees: makeSelectSkillTrees(),
});

function mapDispatchToProps(dispatch) {
  return {
    getSkillTrees: () => dispatch(getSkillTrees()),
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
