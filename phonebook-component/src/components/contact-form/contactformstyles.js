import { styled } from '@mui/system';
import { Container, Typography, Button, TextField } from '@mui/material';

export const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Heading = styled(Typography)`
  font-size: 28px;
`;

export const ErrorText = styled(Typography)`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 15px;
    width: 100%;
  }
`;

export const AddButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 15px;
  }
`;
