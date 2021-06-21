import React from 'react'
import phonebookServices from './services/phonebook'

const PersonForm = ({ persons, setPersons, newName, setName, newNum, setNum }) => {
    const addPerson = (event) => {
        let nameAlreadyAdded = false
    
        event.preventDefault();
        const personObj = {
          name: newName,
          number: newNum
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

          phonebookServices.create(personObj)

          setName('')
          setNum('')
        }
      }
    
      const handleNameChange = (event) => {
        setName(event.target.value)
      }
      const handleNumChange = (event) => {
        setNum(event.target.value)
      }

      return (
        <form onSubmit={addPerson}>
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
      )
}

export default PersonForm