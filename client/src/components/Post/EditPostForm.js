import React from 'react';
import { Container } from 'reactstrap';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { BlogButton, Column, Text } from '../reusable';
import { COLORS } from '../../constants';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditPostForm = ({
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
          actions.setFormikState({ msg: "Can't edit post." });
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
            Save
          </BlogButton>
        </Column>
      </Form>
    )}
    </Formik>
  </Container>
);

export default EditPostForm;
