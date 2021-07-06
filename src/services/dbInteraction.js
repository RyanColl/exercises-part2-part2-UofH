import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'
const dbInteraction = {
    getAll: () => {
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
      },
    create: (newObject) => {
        const request = axios.post(baseUrl, newObject)
        return request.then(response => console.log(response.data))
      },
    _update: (id, newObject) => {
        const request = axios.put(`${baseUrl}/${id}`, newObject)
        return request.then(response => response.data)
    },
    delete: (id) => {
        axios.delete(`${baseUrl}/${id}`)
    }
}
export default dbInteraction