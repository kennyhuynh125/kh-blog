import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Container } from 'reactstrap';
import SuggestionSelect from './SelectSuggestion';
import { BlogButton, Column, Text } from '../reusable';
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
            <Column>
              <Field type='text' name='name' placeholder='Name' />
              <ErrorMessage name='name' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
            </Column>
            <Column>
            <SuggestionSelect
                onChange={onChange}
                options={options}
                value={value}
              />
            </Column>
          <Column>
            <Field
              component='textarea'
              name='suggestion'
              rows='10'
              placeholder={'Suggestion...'}
              style={{ width: '100%' }}
              type='text'
            />
            <ErrorMessage name='suggestion' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
          </Column>
          <Column>
            <BlogButton disabled={isSubmitting}>
              Submit
            </BlogButton>
          </Column>
        </Form>
      )}
    </Formik>
  </Container>
);

export default SuggestionForm;
