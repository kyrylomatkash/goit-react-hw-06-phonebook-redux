// Імпорт компонентів і стилів
import React from 'react';
import { AppContainer } from './appstyles'; // Імпорт стилів
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from './phonebook-component/contact-list/ContactList';
import ContactForm from './phonebook-component/contact-form/ContactForm';
import Filter from './phonebook-component/filter-contact/Filter';

// Головна функція застосунку
const App = () => {
  return (
    <>
      <AppContainer>
        <ContactForm />
        <Filter />
        <ContactList />
      </AppContainer>
      <ToastContainer />
    </>
  );
};
// Експорт
export default App;
