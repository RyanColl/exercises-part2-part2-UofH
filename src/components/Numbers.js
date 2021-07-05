

const Numbers = (props) => {
    // console.log(props.filter)
    return(
        <div>
            <h2>Numbers</h2>
            <ul>{props.persons.map((person, i) => {
                console.log(person.name.indexOf(props.filter))
                if(person.name.indexOf(props.filter) > -1) return(
                    <li key={i}>
                        {person.name} {person.number}
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Numbers