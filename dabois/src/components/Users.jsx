import React,{useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import User from './User';

const Users = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
            {
                users && users.map(item => {
                    console.log(item)
                    return(
                        <User 
                        name={item.name}
                        bio={item.bio}
                        id={item.id}
                        />
                    )
                })
            }
            
        </div>
    );
}

export default Users;
