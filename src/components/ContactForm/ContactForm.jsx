import styles from './ContactForm.module.css';
import {Formik, Form, Field, ErrorMassege} from 'formik';
import * as yup from 'yup';
import useId from 'react'; 

const schema = yup.object().shape({
    name: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
    number: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

export default function ContactForm({onAdd}) {
   const contactId = useId();

    return (
        <div className={styles.container}>
            <Formik
            initialValues={{id: '', name: '', number: ''}}
            onSubmit={onAdd}
            validationSchema={schema}>
                <Form className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor={contactId + '-name'}>Name</label>
                        <Field 
                        name="name"
                        type="text"
                        id={contactId +'-name'}
                        placeholder="name" />
                        <ErrorMassege name="name" component="div" className={styles.error} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor={contactId + '-number'}>Number</label>
                        <Field 
                        name="number"
                        type="tel"
                        id={contactId + 'number'} 
                        placeholder= '000-000-000'/>
                        <ErrorMassege name="number" component="div" className={styles.error} />
                    </div>

                    <button type="submit">Add contact</button>

                </Form>

            </Formik>

        </div>
       
    );
} ;