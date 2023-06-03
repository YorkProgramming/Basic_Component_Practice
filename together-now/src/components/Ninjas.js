import React, {useState} from 'react';

const Ninja = (props) => {

    
    const {firstName, lastName, age, hair} = props
    
    const [birthday, setBirthday] = useState(age)

    const addBirth = () => {
        setBirthday(birthday + 1)
    }

    return (
        <div>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { birthday }</p>
            <p>Hair Color: { hair }</p>

            <button onClick={addBirth} className= "btn btn-primary mt-3">Birthday Button for { firstName } { lastName }</button>
        </div>
    )
}

export default Ninja;