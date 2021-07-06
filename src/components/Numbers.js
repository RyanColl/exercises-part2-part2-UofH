
import Delete from "./Delete"
const Numbers = (props) => {
    // console.log(props.filter)
    return(
        <div>
            <h2>Numbers</h2>
            <ul>{props.persons.map((person, i) => {
                if(person.name.indexOf(props.filter) > -1) return(
                    <li key={i}>
                        {person.name} {person.number} <Delete person={person} persons={props.persons} id={person.id} delete={props.delete}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Numbers