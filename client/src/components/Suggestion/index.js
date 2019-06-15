import React, { Component } from 'react';
import { compose, hoistStatics } from 'recompose';
import * as Yup from 'yup';
import { Container } from 'reactstrap';
import { Loader, Error } from '../reusable';
import AuthContainer from '../../actions/auth/container';
import SuggestionContainer from '../../actions/suggestions/container';
import MySuggestions from './MySuggestions';
import SuggestionForm from './SuggestionForm';
import { SUGGESTION_OPTIONS } from './utils';

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      name: '',
      selectedSuggestion: null,
      suggestion: '',
    };
  }

  async componentDidMount() {
    try {
      if (this.props.auth.user) {
        await this.props.suggestionActions.getSuggestions();
      }
      this.setState({
        isLoading: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err.message,
      });
    }
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
    const { success, payload } = await this.props.suggestionActions.createSuggestion({
      name,
      suggestion,
      suggestionType: value,
    });
    if (success) {
      this.props.history.push('/');
    } else {
      this.setState({
        error: payload,
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <Error message={this.state.error} />;
    }
    if (this.props.auth.user) {
      const { suggestions } = this.props.suggestions;
      return <MySuggestions suggestions={suggestions} />;
    }

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

const enhance = hoistStatics(compose(
  AuthContainer,
  SuggestionContainer,
));
export default enhance(Suggestion);
