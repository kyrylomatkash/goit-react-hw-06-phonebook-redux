// Імпорт бібліотек
import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import { toast } from 'react-toastify';
// Основна функція компоненту
const DeleteContactModal = ({ open, message, onConfirm, onCancel }) => {
  const handleConfirm = () => {
    onConfirm();
    toast.success('Contact deleted successfully.');
  };

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="confirmation-dialog"
    >
      <DialogTitle id="confirmation-dialog-title">Delete Contact</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
// Експорт
export default DeleteContactModal;
