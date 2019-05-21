import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Container } from 'reactstrap';
import { BlogButton, Column, Text } from '../reusable';
import { COLORS } from '../../constants';

const LoginForm = ({
  initialValues,
  onSubmit,
  validationSchema,
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
          actions.setFormikState({ msg: 'Unable to log in.' });
        }
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Column>
            <Field type='email' name='email' placeholder='Email' />
            <ErrorMessage name='email' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
          </Column>
          <Column>
            <Field type='password' name='password' placeholder='Password' />
            <ErrorMessage name='password' render={msg => <Text color={COLORS.RED}>{msg}</Text>}/>
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

export default LoginForm;
