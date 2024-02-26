import styles from './Contact.module.css';
import IoPerson from 'react-icon/io5';
import FaPhoneAlt from 'react-icon/fa'

export default function Contact({contact: {name, numer, id}, onDelete}){
    return (
        <div className={styles.contact}>
            <div className={styles.information}>
                <IoPerson />
                <p>{name}</p>
            </div>
            <div className={styles.numer}>
                <FaPhoneAlt />
                <p>{numer}</p>
            </div>
            
            <button 
            className={styles.delete}
             onClick={() => onDelete(id)}>Delete</button>
        </div>
    )

} 