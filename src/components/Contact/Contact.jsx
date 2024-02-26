import styles from './Contact.module.css';
import IoPerson from 'react-icon/io5';

export default function Contact({data: {contact, id}, onDelete}){
    return (
        <div>
            <p>name</p>
            <p>phone</p>
            <button onClick={() => onDelete}>DELETE</button>
        </div>
    )

} 