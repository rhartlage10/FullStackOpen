import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Countries from './Countries'

function App() {

  const [ countries, setCountries] = useState([]);
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])
  console.log('render', countries.length, 'names')

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={countries} filter={filter}/>
    </div>
  );
}

export default App;
