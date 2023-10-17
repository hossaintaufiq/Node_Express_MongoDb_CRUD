import {
    createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Users from "../Components/Users/Users";

const Route = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,

    },
    {
        path: "/users",
        element: <Users> </Users>,
        loader: ()=>fetch('http://localhost:5000/users')

    }

]);



export default Route;