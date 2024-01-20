// FilterStyles.js
import { styled } from '@mui/system';
import { Container, Typography, Input } from '@mui/material';

export const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
`;

export const Heading = styled(Typography)`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const SearchInput = styled(Input)`
  && {
    margin-bottom: 15px;
    width: 200px;
  }
`;
