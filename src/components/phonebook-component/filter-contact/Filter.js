// Імпорт бібліотек,стилів і логіки Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../redux/filterSlice';
import { AppContainer, SearchInput, Heading } from './filterstyles';
// Основна функція компоненту
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  // Зміна значення фільтра
  const handleChange = e => {
    dispatch(filterAction(e.target.value));
  };

  return (
    <AppContainer>
      <Heading>Contacts</Heading>
      <SearchInput
        label="Search"
        variant="outlined"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </AppContainer>
  );
};
// Експорт
export default Filter;
