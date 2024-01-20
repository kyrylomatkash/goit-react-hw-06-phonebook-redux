// Імпорт бібліотек,стилів і логіки Redux
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { StyledForm, StyledTextField } from './editcontactmodalstyles'; // Import your styled components
// Основна функція компоненту
const EditContactModal = ({ contact, isOpen, onClose, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  // Збереження зміненого контакту
  const handleSave = () => {
    if (!name.trim() || !number.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    onSave({ id: contact.id, name, number });
    onClose();
  };

  const handleClose = () => {
    toast.success('Contact edited successfully.');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit the details of the contact below.
        </DialogContentText>
        <StyledForm>
          <StyledTextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
          <StyledTextField
            label="Number"
            variant="outlined"
            value={number}
            onChange={e => setNumber(e.target.value)}
            fullWidth
          />
        </StyledForm>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save Changes
        </Button>
      </DialogActions>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </Dialog>
  );
};
// Експорт
export default EditContactModal;
