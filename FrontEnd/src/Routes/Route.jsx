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
        element: <Users> </Users>
    }

]);



export default Route;