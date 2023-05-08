import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:7000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
                
                alert('Deleted Successfully');
            }
        })
    }


    return (
        <div>
            <h2>Total Users Number: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>Name: {user.name}: Email: {user.email} <Link to={`/users/${user._id}`}><button>Update</button></Link> <button onClick={()=>handleDelete(user._id)}>X</button></p>)
                }
            </div>

            <Link to='/'><button>Back</button></Link>
        </div>
    );
};

export default Users;