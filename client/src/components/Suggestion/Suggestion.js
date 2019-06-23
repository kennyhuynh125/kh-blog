import React from 'react';
import moment from 'moment-timezone';
import { Container, Row } from 'reactstrap';
import {
  Column, Card, Spacer, Text,
} from '../reusable';

const Suggestion = ({ suggestion }) => (
  <Container>
    <Card>
      <Row>
        <Column>
          <Text>{moment(suggestion.created_at).format('ll')}</Text>
        </Column>
        <Column>
          <Text>{suggestion.name}</Text>
        </Column>
        <Column>
          <Text>{suggestion.suggestion_type}</Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text>{suggestion.suggestion}</Text>
        </Column>
      </Row>
    </Card>
    <Spacer />
  </Container>
);

export default Suggestion;
