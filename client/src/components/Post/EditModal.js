import React from 'react';
import {
  Container, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import EditPostForm from './EditPostForm';
import { Text } from '../reusable';

const EditModal = ({
  editorState,
  initialValues,
  isOpen,
  onEditorStateChange,
  onSubmit,
  toggle,
  validationSchema,
}) => (
  <Container>
    <Modal
      size='lg'
      isOpen={isOpen}
    >
      <ModalHeader toggle={toggle}>
        <Text>Edit Post</Text>
      </ModalHeader>
      <ModalBody>
        <EditPostForm
          editorState={editorState}
          initialValues={initialValues}
          onEditorStateChange={onEditorStateChange}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </ModalBody>
    </Modal>
  </Container>
);

export default EditModal;
