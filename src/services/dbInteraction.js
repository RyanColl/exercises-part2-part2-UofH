import axios from 'axios'
const baseUrl = /* 'http://localhost:3001/persons' */ 'http://localhost:3001/api/notes' 
const dbInteraction = {
    getAll: () => {
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
      },
    create: (newObject, fn) => {
        axios.post(baseUrl, newObject)
        fn(`${newObject.name} has been added to the phone list`)
        setTimeout(() => {
            fn('')
          }, 5000)
      },
    update: (id, newObject) => {
        // put to replace by id
        axios.put(`${baseUrl}/${id}`, newObject)
        //error messaging
        
    },
    delete: (id) => {
        axios.delete(`${baseUrl}/${id}`)
    },
    findID: (name, number, fn) => {
        const request = axios.get(baseUrl)
        return request.then(response => {
            if(response === undefined) {
                fn(`${name}'s data is missing from the server`)
                return
            } else {
                return((response.data.filter((person, i) => (person.name === name) || (person.number === number)))[0].id)
            }
        })
    }
}
export default dbInteraction