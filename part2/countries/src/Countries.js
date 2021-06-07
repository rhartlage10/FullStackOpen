import React from 'react'

const DisplayCountry =({ country }) => {
    return(
    <div>
        <h2>{country.name}</h2>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>

        <h3>Languages</h3>
        <ul>
            {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>

        <img src={country.flag} alt="flag" height='100px' width='150px'/>
    </div>)
}

const Countries = ({ countries, filter, showCountry, setShowCountry }) => {

    const display = (country) => {
        return <DisplayCountry country={country} />
    }

    const doNothing = () => {}

    const filtered = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    if (filtered.length === 0) {
        return <div>No matching countries, specify another filter</div>
    } else if (filtered.length === 1) {
        return display(filtered[0])
    } else if (filtered.length > 1 && filtered.length <= 10) {
        let i = 0;
        return  (
            <div>
                {filtered.map(country => 
                    <div key={country.name}> 
                        {country.name}
                        <button key={i++} onClick={() => {
                            setShowCountry(country.name)
                        }}> 
                        show
                        </button>
                         { showCountry === country.name
                         ? display(country, setShowCountry) 
                         : doNothing()
                         }
            
                    </div>)}
            </div>
        )
    } else {
        return <div>Too many matches, specify another filter</div>
    }
}

export default Countries