import styles from './ContactForm.module.css';
import {Formik, Form, Field, ErrorMassege} from 'formik';
import * as yup from 'yup';
import useId from 'react'; 
export default function ContactForm({onAdd}) {

    const handleSubmit = e =>{
        e.preventDefaund();
        onAdd({
            name: e.target.elments.username.value,
            number: e.target.elments.phone.value
        })
        e.target.reset();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" name="username"/>
            <input className={styles.input} type="tel" name="phone"/>
            <button type="submit">Add Contact</button>
        </form>
    )
} 