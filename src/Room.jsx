import React, { useState } from 'react';

function Room() {

    const [isLit, setLit] = useState(true);
    const [age, setAge] = useState();

    return (
        <>
            <p>The room is {isLit? "Lit" : "Dark"}.</p>
            <br/>
            age : {age}
            <button onClick={() => setLit(!isLit)}>Click Me</button>
            <button onClick={() => { setAge(++age)}}>Age </button>
        </>

    )
}

export default Room;