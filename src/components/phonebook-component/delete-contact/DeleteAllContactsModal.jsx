// Імпорт бібліотек і логіки Redux
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { deleteAllContactsAction } from '../redux/contactSlice';
// Основна функція компоненту
const DeleteAllContactsModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  // Видалення усіх контактів
  const handleDeleteAll = () => {
    dispatch(deleteAllContactsAction());
    onClose();
    toast.success('All contacts deleted successfully');
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to clear the phonebook history? This action
          can't be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeleteAll} color="primary">
          Clear
        </Button>
      </DialogActions>
    </Dialog>
  );
};
// Експорт
export default DeleteAllContactsModal;
