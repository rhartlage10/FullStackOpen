import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([
    // { name: 'Arto Hellas', num: '040-123456' },
    // { name: 'Ada Lovelace', num: '39-44-5323523' },
    // { name: 'Dan Abramov', num: '12-43-234345' },
    // { name: 'Mary Poppendieck', num: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length, 'names')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add New</h2>
      <PersonForm persons={persons} setPersons={setPersons} 
                  newName={newName} setNewName={setNewName}
                  newNum={newNum}   setNewNum={setNewNum} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App