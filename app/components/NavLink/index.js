/**
*
* NavLink
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

function ActiveNavLink(props) {
  return (
    <NavLink className="nav-link" {...props} activeClassName="active" />
  );
}

ActiveNavLink.propTypes = {
};

export default ActiveNavLink;
