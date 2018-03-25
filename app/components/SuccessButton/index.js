/**
*
* SuccessButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function SuccessButton(props) {
  return (
    <Button color="success" onClick={props.onClick}>
      { props.children }
    </Button>
  );
}

SuccessButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default SuccessButton;
