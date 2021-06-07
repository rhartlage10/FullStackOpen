import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')

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
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div> name: 
         <input value={newName} onChange={handleNameChange} />
        </div>
        <div> number:
          <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.num}</p>)}
    </div>
  )
}

export default App