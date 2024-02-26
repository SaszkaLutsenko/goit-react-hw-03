import styles from './SearchBox.module.css';
import { useState } from 'react'; 
import { nanoid } from 'nanoid';

export default function SearchBox({ value, onChange }) {
    const [contactId] = useState(nanoid());
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={contactId}>
                Find contacts by name
            </label>
            
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)} 
                id={contactId}
                placeholder="name"
            />
        </div>
    );
};
