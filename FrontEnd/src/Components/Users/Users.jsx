import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers]=useState(loadedUsers)

    const handleDelete = _id => {
        console.log("delete",_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE',

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("deleted successfully");

                const remaining= users.filter(user=>user._id !== _id);
                setUsers(remaining);

            }
        })
    }
    return (
        <div>
            <h2>users: {users.length}</h2>
            {
                users.map(users=> <p 
                    key={users._id}> 
                    {users.name}: 
                    {users.email}
                    <Link to={`/update/${users._id}`}>
                    <button>Update</button>
                    </Link>
                      <button onClick={ ()=>handleDelete(users._id) }>X</button>
                    </p>)
            }
            
        </div>
    );
};

export default Users;