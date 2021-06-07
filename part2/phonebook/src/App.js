import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', num: '040-123456' },
    { name: 'Ada Lovelace', num: '39-44-5323523' },
    { name: 'Dan Abramov', num: '12-43-234345' },
    { name: 'Mary Poppendieck', num: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter] = useState('')

  const addPerson = (event) => {
    let nameAlreadyAdded = false

    event.preventDefault();
    const personObj = {
      name: newName,
      num: newNum
    }

    let i = 0;
    for (i; i < persons.length ; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`)
        nameAlreadyAdded = true
      }
    }

    if (nameAlreadyAdded === false) {
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNum('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filtered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>

      <div>filter shown with: 
        <input value={filter} onChange={handleFilterChange}/>
      </div>

      <h2>Add New</h2>
        <div>name: 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: 
          <input value={newNum} onChange={handleNumChange}/>
        </div>   

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {filter.length === 0 
      ? persons.map(person => <p key = {person.name}>{person.name} {person.num}</p>)
      : filtered.map(person => <p key = {person.name}>{person.name} {person.num}</p>)}

    </div>
  )
}

export default App