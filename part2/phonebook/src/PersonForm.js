import React from 'react'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNum, setNewNum }) => {
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