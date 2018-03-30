/**
*
* NavLink
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

function NNavLink(props) {
  return (
    <NavLink className="nav-link" {...props} activeClassName="active" />
  );
}

NNavLink.propTypes = {
};

export default NNavLink;
