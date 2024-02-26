
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
import { useEffect, useState } from 'react';
import nanoid from 'nanoid';


export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('seved-contacts')) ?? []
  );
  const [filter, setFilter] = useState(""); 

  useEffect(() =>{
    localStorage.setItem('seved-contacts', JSON.stringify(contacts))
  }, [contacts]);


  const addContact = (newContact, {resetForm}) => {
    setContacts((prevContacts) => {
      return [...prevContacts, {...newContact, id: nanoid() }]
    });
    resetForm && resetForm();
  };

  const deleteContact = (contactId) => {
   setContacts(prevContacts =>{
    return prevContacts.filter((contact) => contact.id !== contactId )
   })
  }

  const visibleContact = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()));


  const handleFilter = e => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  return(
    <div>
    <h1>Phonebook</h1>
    <ContactForm  onAdd={addContact} />
    <SearchBox value={filter} onChange={handleFilter}/>
    <ContactList contacts = {visibleContact} onDelete={deleteContact} />
  </div>
  );
};
