import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const deltaInput = (e) => {
    setNewName(e.target.value)
  }
  const handleButton = (e) => {
    e.preventDefault()
    let personObj = {
      name: newName
    }
    setPersons(persons.concat(personObj))
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={deltaInput}/>
        </div>
        <div>
          <button type="submit" onClick={handleButton}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(({name}, i) => {
         return(
           <li key={i}>
             {name}
           </li>
           
         ) 
      })}</ul>
    </div>
  )
}

export default App