import React from 'react'
import axios from 'axios'

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

          axios.post('http://localhost:3001/persons', personObj)
          .then(response => {console.log(response.data)})

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