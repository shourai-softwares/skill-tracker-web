/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import axios from 'axios';
import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import SuccessButton from '../../components/SuccessButton/index';
import SkillList from '../../components/SkillList/index';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
