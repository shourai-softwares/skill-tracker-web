/**
 *
 * AuthProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import LoginPage from 'containers/LoginPage/Loadable';

import reducer from './reducer';
import { makeSelectApiKey } from './selector';

export class AuthProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.apiKey) {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      );
    }

    return (<LoginPage />);
  }
}

AuthProvider.propTypes = {
  apiKey: PropTypes.object,
  children: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  apiKey: makeSelectApiKey(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'auth', reducer });

export default compose(
  withReducer,
  withConnect,
)(AuthProvider);
