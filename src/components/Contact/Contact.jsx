import css from './Contact.module.css'
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <div>
                <p className={css.text}><FaUser className={css.icon} size="14" />{name}</p>
                <p className={css.text}><FaPhone className={css.icon} size="14" />{number}</p>
            </div>
            <button className={css.button} type='button' onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}