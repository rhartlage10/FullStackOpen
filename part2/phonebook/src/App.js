import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import phonebookServices from './services/phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    phonebookServices.getAll()
    .then(response => setPersons(response))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add New</h2>
      <PersonForm persons={persons} setPersons={setPersons} 
                  newName={newName} setName={setNewName}
                  newNum={newNum}   setNum={setNewNum} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App