import React from 'react'

const Country = ({ country }) => <p>{country}</p>

const Countries = ({ countries, filter }) => {

    const filtered = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    if (filtered.length === 0) {
        return <div>No matching countries, specify another filter</div>
    } else if (filtered.length === 1) {
        return (
            <div>
                <h1>{filtered[0].name}</h1>
                <p>capital {filtered[0].capital}</p>
                <p>population {filtered[0].population}</p>
                <h2>languages</h2>
                <ul>
                 {filtered[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
                </ul>
                <img src={filtered[0].flag} alt="flag" height='100px' width='150px'/>
            </div>
        )
    } else if (filtered.length > 1 && filtered.length <= 10) {
        return  (
            <div>
               { filtered.map(country => <Country country={country.name} key={country.name} />) }
            </div>
        )
    } else {
        return <div>Too many matches, specify another filter</div>
    }
}

export default Countries