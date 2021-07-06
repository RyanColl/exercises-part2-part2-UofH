import './App.css';
import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers';
import dbInteraction from './services/dbInteraction';

//  Maintain the application's state and all event handlers in the App root component.

const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: '' }
  ])
  useEffect(() => {
    dbInteraction
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, [])
  
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState(0)
  const [ filter, setFilter ] = useState('')
  const nameInput = (e) => {
    setNewName(e.target.value)
  }
  const numInput = (e) => {
    setNewNum(e.target.value)
  }
  const filterInput = (e) => {
    setFilter(e.target.value)
  }
  const handleButton = (e) => {
    e.preventDefault()
    const personObj = {
      name: newName,
      number: newNum
    }
    // LOGIC IS SOUND. filter returns an array and we grab the length of it and see if its greater than 0
    // filter returns an array based off of its input, obj is each object of the array
    // it compares the name key with the newName variable we get from the input tag
    // if it finds a match, it returns a value, thus array is greater than 0
    if((persons.filter(obj => obj.name === newName)).length > 0) {
      alert(`${newName} is already in the phone book`) 
      setNewName('')
      setNewNum(0)
    }
    else {
      dbInteraction.create(personObj)
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNum(0)
    }
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          <p>
              filter shown with a <input value={filter} onChange={filterInput} />
          </p>
        </div>
      <form>
        <div>
          name: <input value={newName} onChange={nameInput}/>
        </div>
        <div>
          number: <input value={newNum} onChange={numInput}/>
        </div>
        <div>
          <button type="submit" onClick={handleButton}>add</button>
        </div>
      </form>
      <Numbers persons={persons} filter={filter} delete={setPersons}/>
    </div>
  )
}

export default App