import React from 'react'

const Contacts = (props) => {

    //console.log(props);

  return (
    <div>
        <p>cia yra mano kontaktu komponentas</p>
        <h2>vardas: {props.name}</h2>
        <h3>email: {props.email}</h3>
        <h3>age: {props.age} </h3>

    </div>
  )
}

export default Contacts