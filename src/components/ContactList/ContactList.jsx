import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

export default function ContactList({contact, onDelete}) {
    return(
        <ul className={styles.list}>
            <li className={styles.item} key={ContactList.id}>
                <Contact data={Contact}/>
            </li>
        </ul>
    ); 
};