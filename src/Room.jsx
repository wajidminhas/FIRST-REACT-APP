import React, { useState } from 'react';

function Room() {

    const [isLit, setLit] = useState(true);
    return (
        <>
            <p>The room is {isLit? "Lit" : "Dark"}.</p>
            <button onClick={() => setLit(!isLit)}>Click Me</button>
        </>

    )
}

export default Room;