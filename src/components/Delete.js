import dbInteraction from "../services/dbInteraction"
import React from "react"
const Delete = (props) => {
    const click = () => {
        if(window.confirm(`Delete ${props.person.name}?`)) {
            dbInteraction.delete(props.id)
            let result = props.persons.filter((person, i) => person.id !== props.id)
            props.delete(result)
        }
        else {
            return
        }
    }
    return (
        <button onClick={click}>delete</button>
    )
}
export default Delete