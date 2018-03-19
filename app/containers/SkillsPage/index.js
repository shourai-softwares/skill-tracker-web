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
import axios from 'axios/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSkillsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import SuccessButton from '../../components/SuccessButton/index';
import SkillList from '../../components/SkillList/index';

export class SkillsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    skills: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:8000/skills')
      .then((response) => {
        const newState = {
          skills: response.data.data,
        };
        this.setState(newState);
      })
      .catch((error) => console.log(error));
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
          <SkillList skills={this.state.skills} />
        </Card>
      </div>
    );
  }
}

SkillsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  skillspage: makeSelectSkillsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
