import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.modules.css';
import inisionContacts from '../../contacts.json';
import { useState } from 'react';


export default function App() {
  const [contacts, setContacts] = useState(inisionContacts);
  const [filter, setFilter] = useState(""); 

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  };

  const deleteContact = (contactId) => {
   setContacts(prevContacts =>{
    return prevContacts.filter((contact) => contact.id !== contactId )
   })
  }

  const visibleContact = contacts.filter(contact => 
    contact.text.toLowerCase().includes(filter.toLowerCase()))

  return(
    <div className={styles.contaner}>
    <h1>Phonebook</h1>
    <ContactForm  onAdd={addContact} />
    <SearchBox value={filter} onChange={setFilter}/>
    <ContactList contacts = {visibleContact} onDelete={deleteContact} />
  </div>
  );
};
