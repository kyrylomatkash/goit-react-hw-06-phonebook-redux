// Імпорт бібліотек,компонентів,логіки Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction, editContactAction } from '../redux/contactSlice';
import EditContactModal from '../edit-contact/EditContactModal';
import DeleteAllContactsModal from '../delete-contact/DeleteAllContactsModal';
import ConfirmationDialog from '../delete-contact/DeleteConfirmationModal';
import ContactExistsModal from './ContactAlreadyExist';
import { Typography } from '@mui/material';
import {
  setEditContact,
  setDeleteAllModalOpen,
  setDeleteConfirmationOpen,
  setContactToDelete,
  setContactExistsModalOpen,
} from '../redux/modalSlice';
// Імпорт стилів
import {
  ContactListContainer,
  StyledList,
  StyledListItem,
  EditButton,
  DeleteButton,
  NoContactsMessage,
  DeleteAllButton,
} from './contactliststyles';

// Основна функція компоненту
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  // Стейти модальних вікон
  const {
    editContact,
    deleteAllModalOpen,
    deleteConfirmationOpen,
    contactToDelete,
    contactExistsModalOpen,
  } = modal;
  // Фільт по імені
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // Редагування контакту
  const handleEdit = contact => {
    dispatch(setEditContact(contact));
  };
  // Видалення контакту
  const handleDelete = contact => {
    dispatch(setContactToDelete(contact));
    dispatch(setDeleteConfirmationOpen(true));
  };
  // Підтвердження видалення
  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContactAction(contactToDelete.id));
      dispatch(setDeleteConfirmationOpen(false));
    }
  };
  // Відміна видалення
  const cancelDelete = () => {
    dispatch(setContactToDelete(null));
    dispatch(setDeleteConfirmationOpen(false));
  };
  // Збереження зміненого контакту
  const handleSaveEdit = ({ id, name, number }) => {
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() && contact.id !== id
    );

    if (isContactExists) {
      dispatch(setContactExistsModalOpen(true));
    } else {
      dispatch(editContactAction({ id, name, number }));
      dispatch(setEditContact(null));
    }
  };

  const handleCloseEditForm = () => {
    dispatch(setEditContact(null));
  };

  const handleOpenDeleteAllModal = () => {
    dispatch(setDeleteAllModalOpen(true));
  };

  const handleCloseDeleteAllModal = () => {
    dispatch(setDeleteAllModalOpen(false));
  };

  return (
    <ContactListContainer>
      {filteredContacts.length > 0 ? (
        <>
          <StyledList>
            {filteredContacts.map(contact => (
              <StyledListItem key={contact.id}>
                <Typography>
                  {contact.name} - {contact.number}
                </Typography>
                <EditButton variant="text" onClick={() => handleEdit(contact)}>
                  Edit
                </EditButton>
                <DeleteButton
                  variant="text"
                  color="error"
                  onClick={() => handleDelete(contact)}
                >
                  Delete
                </DeleteButton>
              </StyledListItem>
            ))}
          </StyledList>
          <DeleteAllButton
            variant="outlined"
            color="error"
            onClick={handleOpenDeleteAllModal}
          >
            Clear history
          </DeleteAllButton>
        </>
      ) : (
        <NoContactsMessage>There are no contacts.</NoContactsMessage>
      )}
      {editContact && (
        <EditContactModal
          contact={editContact}
          isOpen={!!editContact}
          onClose={handleCloseEditForm}
          onSave={handleSaveEdit}
        />
      )}
      <DeleteAllContactsModal
        isOpen={deleteAllModalOpen}
        onClose={handleCloseDeleteAllModal}
      />
      {deleteConfirmationOpen && (
        <ConfirmationDialog
          open={deleteConfirmationOpen}
          message={`Are you sure you want to delete ${contactToDelete?.name}?`}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      {contactExistsModalOpen && (
        <ContactExistsModal
          isOpen={contactExistsModalOpen}
          onClose={() => dispatch(setContactExistsModalOpen(false))}
        />
      )}
    </ContactListContainer>
  );
};
// Експорт
export default ContactList;
