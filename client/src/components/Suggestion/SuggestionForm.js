import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import SuggestionSelect from './SelectSuggestion';
import {
  BlogButton, Container, Flex, Spacer, Text,
} from '../reusable';
import { COLORS } from '../../constants';

const SuggestionForm = ({
  initialValues,
  onChange,
  options,
  onSubmit,
  validationSchema,
  value,
} = {}) => (
  <Container>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        try {
          onSubmit(values);
          actions.setSubmitting(false);
        } catch (err) {
          actions.setSubmitting(false);
          actions.setErrors(err);
          actions.setFormikState({ msg: 'Unable to create suggestion!' });
        }
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
            <Flex flexDirection='column'>
              <Field type='text' name='name' placeholder=' Name' style={{ width: '100%' }}/>
              <ErrorMessage name='name' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
            </Flex>
            <Spacer />
            <SuggestionSelect
                onChange={onChange}
                options={options}
                value={value}
            />
            <Spacer />
          <Flex flexDirection='column'>
            <Field
              component='textarea'
              name='suggestion'
              rows='10'
              placeholder={' Suggestion...'}
              style={{ width: '100%' }}
              type='text'
            />
            <ErrorMessage name='suggestion' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
          </Flex>
          <Spacer />
          <Flex>
            <BlogButton disabled={isSubmitting}>
              Submit
            </BlogButton>
          </Flex>
        </Form>
      )}
    </Formik>
  </Container>
);

export default SuggestionForm;
