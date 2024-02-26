import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { nanoid } from 'nanoid'; 

const schema = yup.object().shape({
    name: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
    number: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

export default function ContactForm({onAdd}) {
   const [contactId] = useState(nanoid());

    return (
        <div className={styles.container}>
            <Formik
            initialValues={{id: '', name: '', number: ''}}
            onSubmit={(values, {resetForm}) => {
                onAdd(values, {resetForm});
            }}
            validationSchema={schema}>
                <Form className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor={contactId + '-name'}>Name</label>
                        <Field 
                        name="name"
                        type="text"
                        id={contactId +'-name'}
                        placeholder="name" />
                        <ErrorMessage name="name" component="div" className={styles.error} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor={contactId + '-number'}>Number</label>
                        <Field 
                        name="number"
                        type="tel"
                        id={contactId + '-number'} 
                        placeholder= '000-000-000'/>
                       <ErrorMessage name="number" component="div" className={styles.error} />
                    </div>

                    <button type="submit">Add contact</button>

                </Form>

            </Formik>

        </div>
       
    );
} ;