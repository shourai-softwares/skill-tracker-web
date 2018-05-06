/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row,
} from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={{ size: '6', offset: '3' }}>
            <Card>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>Login</Label>
                    <Input />
                  </FormGroup>
                  <FormGroup>
                    <Label>Senha</Label>
                    <Input type="password" />
                  </FormGroup>
                  <div className="text-center">
                    <Button>
                      Login
                    </Button>
                  </div>
                </Form>
                <a href="#a">Cadastre-se</a>
                &nbsp;|&nbsp;
                <a href="#b">Esqueci minha senha</a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
