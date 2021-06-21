import React from 'react'
import phonebookServices from './services/phonebook'

const Person = ({ persons, person, set }) => {
    return (
        <p>{person.name} {person.number} 

            <button onClick={(e) => {
                e.preventDefault()
                if(window.confirm(`Delete ${person.name} from phonebook?`)) {
                    phonebookServices.deletePerson(person.id)
                    set(persons.filter(p => p.id !== person.id))
                }
            }}>
            Delete</button>
        </p>
    )
}

const Persons = ({ persons, filter, setPersons}) => {

    const filtered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {filter.length === 0 
                ? persons.map(person =>  <Person key={person.name} persons={persons} person={person} set={setPersons} />)
                : filtered.map(person => <Person key={person.name} persons={persons} person={person} set={setPersons} />)}
        </div>
    )
}

export default Persons