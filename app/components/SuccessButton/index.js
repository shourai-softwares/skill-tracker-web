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
    <Button color="success">
      { props.children }
    </Button>
  );
}

SuccessButton.propTypes = {
  children: PropTypes.node,
};

export default SuccessButton;
