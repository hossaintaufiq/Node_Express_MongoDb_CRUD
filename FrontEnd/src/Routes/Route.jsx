import {
    createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Users from "../Components/Users/Users";
import Update from "../Components/Users/Update/Update";

const Route = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,

    },
    {
        path: "/users",
        element: <Users> </Users>,
        loader: ()=>fetch('http://localhost:5000/users')

    },
    {
        path:"/update/:id",
        element: <Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
    }

]);



export default Route;