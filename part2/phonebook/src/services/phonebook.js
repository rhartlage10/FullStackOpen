import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = personObj => {
    return axios.post(baseUrl, personObj).then(response => response.data)
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const exportedObj = {
    getAll,
    create,
    deletePerson
}

export default exportedObj