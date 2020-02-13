import React,{ useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
form {
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
    
    input {
        margin: 1em 0em;
        box-shadow: 2px 2px 2px #111;
    }
    button {
        box-shadow: 2px 2px 2px #111;
    }
}

`

const Form = () => {

const [newUser, setNewUser] = useState({
    name: '',
    bio: '',
})

const changeHandler = e => {
    setNewUser({...newUser,[e.target.name]: e.target.value})
}

const submitHandler = e => {
    // e.preventDefault()
    axios.post('http://localhost:5000/users', newUser)
    .then(res => {console.log(res)})
    .catch(err => {
        console.log(err)
    })

}

    return (
        <Div>
            <form onSubmit={submitHandler}>
                <input
                name='name'
                placeholder='Name goes here, dork.'
                value={newUser.name} 
                type="text"
                onChange={changeHandler}/>

                <input
                name='bio'
                placeholder='Put a bio here I guess.'
                value={newUser.bio} 
                type="text"
                onChange={changeHandler}/>

                <button>Add User</button>
            </form>
            
        </Div>
    );
}

export default Form;
