import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { Container } from 'reactstrap';
import { BlogButton, Column, Text } from '../reusable';
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
          <Column>
            <Field type='text' name='title' placeholder='Title' />
            <ErrorMessage name='title' render={msg => <Text color={COLORS.RED}>{msg}</Text>} />
          </Column>
          <Column>
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            />
          </Column>
          <Column>
            <BlogButton disabled={isSubmitting}>
              Add Post
            </BlogButton>
          </Column>
        </Form>
      )}
    </Formik>
  </Container>
);

export default AddPostForm;
