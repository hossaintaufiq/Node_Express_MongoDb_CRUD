import { useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h2>users: {users.length}</h2>
            {
                users.map(users=> <p key={users._id}> {users.name}: {users.email}</p>)
            }
            
        </div>
    );
};

export default Users;