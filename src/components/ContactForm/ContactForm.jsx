import css from './ContactForm.module.css'
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { nanoid } from 'nanoid'

export default function ContactForm({ onAdd }) {
    const nameId = useId()
    const numberId = useId()

    const initialValues = {
        username: "",
        number: "",
    }

    const handleSubmit = (e) => {
        onAdd({
            id: nanoid(),
            username: e.target.elements.username.value,
            number: e.target.elements.number.value,
        })
        e.target.reset
    }

    const validationScheme = Yup.object().shape({
        username: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    })

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationScheme}>
            <Form>
                <label htmlFor={nameId}>Name</label>
                <Field type="text" name="username" id={nameId}></Field>
                <ErrorMessage name='username' component="span"></ErrorMessage>
                <label htmlFor={numberId}>Number</label>
                <Field type="text" name="number" id={numberId}></Field>
                <ErrorMessage name="number" component="span"></ErrorMessage>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}