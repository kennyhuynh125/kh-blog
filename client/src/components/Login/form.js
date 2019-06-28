import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import {
  BlogButton, Flex, Spacer, Text,
} from '../reusable';
import { COLORS } from '../../constants';

const LoginForm = ({
  initialValues,
  onSubmit,
  validationSchema,
} = {}) => (
    <Flex alignItems='center' justifyContent='center' flexDirection='column'>
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
              <Flex>
                <Field type='email' name='email' placeholder='Email' />
              </Flex>
              <Spacer />
              <Flex flexDirection='column'>
                <Field type='password' name='password' placeholder='Password' />
                <ErrorMessage name='password' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
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
    </Flex>
);

export default LoginForm;
