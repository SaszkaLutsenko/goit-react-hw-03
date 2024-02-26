import styles from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ contact: { name, number, id }, onDelete }) {
    return (
        <div className={styles.contact}>
            <div className={styles.information}>
                <IoPerson />
                <p>{name}</p>
            </div>
            
            <div className={styles.number}>
                <FaPhoneAlt />
                <p>{number}</p>
            </div>

            <button 
                className={styles.delete}
                onClick={() => onDelete(id)}>Delete
            </button>
        </div>
    );
}