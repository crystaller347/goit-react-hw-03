import css from './ContactForm.module.css'
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { nanoid } from 'nanoid'

export default function ContactForm({ onAdd }) {
    const nameId = useId()
    const numberId = useId()

    const initialValues = {
        name: "",
        number: "",
    }

    const handleSubmit = (values, actions) => {
        onAdd({
            ...values,
            id: nanoid(),
        })
        actions.resetForm()
    }

    const validationScheme = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    })

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationScheme}>
            <Form className={css.container}>
                <div className={css.textContainer}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId}></Field>
                    <ErrorMessage name='name' component="span"></ErrorMessage>
                </div>
                <div className={css.textContainer}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId}></Field>
                    <ErrorMessage name="number" component="span"></ErrorMessage>
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}