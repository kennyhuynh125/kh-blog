import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import {
  BlogButton, Container, Flex, Spacer, Text,
} from '../reusable';
import { COLORS } from '../../constants';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AddPostForm = ({
  editorState,
  initialValues,
  onEditorStateChange,
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
          actions.setFormikState({ msg: "Can't add post." });
        }
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex flexDirection='column'>
            <Field type='text' name='title' placeholder='Title' style={{ width: '100%' }} />
            <ErrorMessage name='title' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
          </Flex>
          <Spacer />
          <Flex>
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            />
          </Flex>
          <Spacer />
          <Flex>
            <BlogButton disabled={isSubmitting}>
              Add Post
            </BlogButton>
          </Flex>
        </Form>
      )}
    </Formik>
  </Container>
);

export default AddPostForm;
