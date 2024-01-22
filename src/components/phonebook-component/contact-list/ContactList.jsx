// Імпорт бібліотек,компонентів,логіки Redux
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContactAction,
  editContactAction,
} from '../../../redux/contactSlice';
import EditContactModal from '../edit-contact/EditContactModal';
import DeleteAllContactsModal from '../delete-contact/DeleteAllContactsModal';
import ConfirmationDialog from '../delete-contact/DeleteConfirmationModal';
import ContactExistsModal from './ContactAlreadyExist';
import { Typography } from '@mui/material';

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
  const dispatch = useDispatch();
  // Стейти модальних вікон
  const [editContact, setEditContact] = useState(null);
  const [deleteAllModalOpen, setDeleteAllModalOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [contactExistsModalOpen, setContactExistsModalOpen] = useState(false);
  // Фільтр по імені
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // Редагування контакту
  const handleEdit = contact => {
    setEditContact(contact);
  };
  // Видалення контакту
  const handleDelete = contact => {
    setContactToDelete(contact);
    setDeleteConfirmationOpen(true);
  };
  // Підтвердження видалення
  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContactAction(contactToDelete.id));
      setDeleteConfirmationOpen(false);
    }
  };
  // Відміна видалення
  const cancelDelete = () => {
    setContactToDelete(null);
    setDeleteConfirmationOpen(false);
  };
  // Збереження зміненого контакту
  const handleSaveEdit = ({ id, name, number }) => {
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() && contact.id !== id
    );
    // Відслідковування вже існуючого контакту у списку
    if (isContactExists) {
      setContactExistsModalOpen(true);
    } else {
      dispatch(editContactAction({ id, name, number }));
      setEditContact(null);
    }
  };
  // Закриття модального вікна редагування контакту
  const handleCloseEditForm = () => {
    setEditContact(null);
  };
  // Відкриття модального вікна видалення усіх контактів
  const handleOpenDeleteAllModal = () => {
    setDeleteAllModalOpen(true);
  };
  // Закриття модального вікна видалення усіх контактів
  const handleCloseDeleteAllModal = () => {
    setDeleteAllModalOpen(false);
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
          onClose={() => setContactExistsModalOpen(false)}
        />
      )}
    </ContactListContainer>
  );
};
// Експорт
export default ContactList;
