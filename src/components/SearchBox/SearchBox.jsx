import styles from './SearchBox.module.css';
import useId from 'react'

export default function SearchBox({value, onFilter}) {
    const contactId = useId();
    return(
        <div className={styles.container}>
            <label className={styles.label} htmlFor="elementId">
            Find contacts by name
            </label>
            
            <input
            className={styles.input} 
            type="text"
             value={value} 
            onChange={(e) => onFilter(e.target.value)}
            id={contactId}
            placeholder="name"/>
           
        </div>
    );
};
