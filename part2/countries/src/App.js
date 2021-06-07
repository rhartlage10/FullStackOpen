import React, { useState } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Countries from './Countries'

function App() {

  const [ countries, setCountries] = useState([]);
  const [ filter, setFilter] = useState('')
  const [showCountry, setShowCountry] = useState(true)

    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => setCountries(response.data))

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={countries} filter={filter} showCountry={showCountry} setShowCountry={setShowCountry}/>
    </div>
  );
}

export default App;
