import React from 'react'
import phonebookServices from './services/phonebook'

const PersonForm = ({ persons, setPersons, newName, setName, newNum, setNum, setNotification, setNoError }) => {
    const addPerson = (event) => {
    
        event.preventDefault();
        const result = persons.find(person => person.name === newName)
    
        if (result === undefined) {
            const personObj = { name: newName, number: newNum }

            phonebookServices.create(personObj)
            setPersons(persons.concat(personObj))
            setNoError(true)
            setNotification(`Added ${newName} to the phonebook`)
        } else {
          if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
            const personObj = {...result, number: newNum}

            phonebookServices.updatePerson(personObj)
            setPersons(persons.map(person => person.id !== personObj.id
              ? person
              : {...person, number: newNum})
            )
            setNoError(true)
            setNotification(`Updated ${newName}'s number in the phonebook`)
          }
        }  

        setTimeout(() => {setNotification(null)}, 3000)
        setTimeout(() => {setNoError(false)}, 3000)
        setName('')
        setNum('')
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