import React, { useState, useEffect } from 'react';

const Posts = () => {
    //state visda virsuje apsirasome
    //state pavadinimas, metodas keisiantis state reiksme, pradine state reiksme
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);


    //reikalingas, kad zinotu, kada daryti uzklausa
    //turi du dalykus - dvi reiksmes: funkcijos iskvietima ir parametra, 
    //kuriam pasikeitus, bus kvieciama nurodyta funkcija

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])

    return (
        <div>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h3>{resourceType}</h3>
        {/* gautu duomenu is api spausdinimas */}
        {items.map((item, index) => {
            return <pre key={index}>{JSON.stringify(item)}</pre>
        })}
        </div>
    )
}

export default Posts