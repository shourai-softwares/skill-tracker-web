/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

import HomePage from 'containers/HomePage/Loadable';
import SkillsPage from 'containers/SkillsPage/Loadable';
import ExercisesPage from 'containers/ExercisesPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthProvider from 'containers/AuthProvider';

import NavLink from 'components/NavLink/index';

export default function App() {
  return (
    <AuthProvider>
      <Navbar className="mb-3" dark color="dark" expand="xs">
        <NavbarToggler />
        <Collapse isOpen navbar>
          <Nav navbar>
            <NavItem>
              <NavLink exact to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/exercises">Exercises</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/exercises" component={ExercisesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </AuthProvider>
  );
}
