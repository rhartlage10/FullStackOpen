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
            .then (response => {
              setPersons(persons.map(person => person.id !== personObj.id
                ? person
                : {...person, number: newNum})
              )
              setNoError(true)
              setNotification(`Updated ${newName}'s number in the phonebook`)
            })
            .catch(error => {
                setNoError(false)
                setNotification(`Information of ${newName} has already been removed from the server`)

              // Don't include person already removed
              setPersons(persons.filter(person => person.id !== personObj.id))
            })
          }
        }  

        setTimeout(() => {setNoError(false)}, 5000)
        setTimeout(() => {setNotification(null)}, 5000)
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
        // add person name/number and submit button
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