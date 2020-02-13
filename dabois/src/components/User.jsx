import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Div = styled.div`
border: 3px inset black;
border-radius: 25px;
width: 40%;
padding: 2%;
margin: 1em auto;
background-color: white;

.name {
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.4em;
}

`

const User = (props) => {



const deleteHandler = id =>{
    window.location.reload();
    axios.delete(`http://localhost:5000/users/${id}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

}

    return (
        <Div>
            <p className="name">{props.name}</p>
            <p className="bio">{props.bio}</p>
            <button
            onClick={()=> {
                deleteHandler(props.id);
            }}
            >Delete</button>
            
        </Div>
    );
}

export default User;
