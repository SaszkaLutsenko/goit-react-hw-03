import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.modules.css';
import inisionContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState([inisionContacts])

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const deleteContact = (contacts.id) => {

  }

  return(
    <div className={styles.contaner}>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact} onDelete={}/>
    <SearchBox />
    <ContactList contacts = {contacts} />
  </div>
  );
};
