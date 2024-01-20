// Імпорт бібліотек
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
// Основна функція компоненту
const ContactExistsModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Contact Already Exists</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          This contact already exists. Please choose a different name.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
// Експорт
export default ContactExistsModal;
