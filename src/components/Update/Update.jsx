import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();

    console.log(loadedUser)

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const updatedUser = {name, email};
        console.log(name, email)
        
        fetch(`http://localhost:7000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('user updated successfully')
            }
        })
    }

    return (
        <div>
            <h2>Update User Information</h2>
            <h5>Edit {loadedUser?.name} info</h5>

            <form onSubmit={handleUpdate}>

                <input type="text" name="name" defaultValue={loadedUser?.name} id="" /><br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" /><br />
                <input type="submit" value="Update" />

            </form>

            <Link to='/users'><button>back</button></Link>
        </div>
    );
};

export default Update;