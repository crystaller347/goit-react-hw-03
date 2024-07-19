import { useState } from 'react'
import css from './App.module.css'
import contactsData from "../../contactsData.json"
import ContactForm from "../ContactForm/ContactForm.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"
import ContactList from "../ContactList/ContactList.jsx"

export default function App() {
  const [contacts, setContacts] = useState(contactsData)
  const [filter, setFilter] = useState("")

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  )
}
