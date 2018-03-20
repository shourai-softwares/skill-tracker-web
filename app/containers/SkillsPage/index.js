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
import { Row, Col, Card, CardBody } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSkillsPage from './selectors';
import reducer from './reducer';
import { getSkills } from './actions';
import saga from './saga';
import SuccessButton from '../../components/SuccessButton/index';
import SkillList from '../../components/SkillList/index';

export class SkillsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSkills();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={{ size: 3, offset: 9 }} >
            <div className="my-2 text-right">
              <SuccessButton>
                Adicionar Skill
              </SuccessButton>
            </div>
          </Col>
        </Row>
        <Card>
          <CardBody>
            LooL
          </CardBody>
          <SkillList skills={this.props.skills} />
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
  })).isRequired,
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
