import React, { Component } from 'react';
import * as Yup from 'yup';
import { Container } from 'reactstrap';
import { Error } from '../reusable';
import SuggestionForm from './SuggestionForm';
import { SUGGESTION_OPTIONS } from './utils';

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      name: '',
      selectedSuggestion: null,
      suggestion: '',
    };
  }

  handleSelectChange = (value) => {
    this.setState({
      selectedSuggestion: value,
    });
  };

  handleSubmit = async (values) => {
    const { selectedSuggestion } = this.state;
    if (!selectedSuggestion) {
      // eslint-disable-next-line no-alert
      alert('Please select a suggestion type.');
      return;
    }
    const { name, suggestion } = values;
    const { value } = selectedSuggestion;
    console.log(name, suggestion, value);
  };

  render() {
    const {
      name, selectedSuggestion, suggestion,
    } = this.state;
    const initialValues = { name, suggestion };
    return (
      <Container>
        <SuggestionForm
          initialValues={initialValues}
          onChange={this.handleSelectChange}
          onSubmit={this.handleSubmit}
          options={SUGGESTION_OPTIONS}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Name is required!'),
            suggestion: Yup.string().required('Suggestion is required!'),
          })}
          value={selectedSuggestion}
        />
      </Container>
    );
  }
}

export default Suggestion;
