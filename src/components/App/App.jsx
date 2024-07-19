import { useState, useEffect } from 'react'
import css from './App.module.css'
import contactsData from "../../contactsData.json"
import ContactForm from "../ContactForm/ContactForm.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"
import ContactList from "../ContactList/ContactList.jsx"

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts")
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return contactsData
  })

  const [filter, setFilter] = useState("")

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContacts} />
    </div>
  )
}
