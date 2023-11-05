import { createBrowserRouter } from "react-router-dom";
import Router from "./Router";
import Login from "../page/login";
import Register from "../page/Register";
import Home from "../page/Home";
import AddJobs from "../page/AddJobs";
import PrivateRoute from "./PrivateRoute";

const Routs =createBrowserRouter([
    {
        path:"/",
        element:<Router></Router>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/add-jobs",
                element:<PrivateRoute>
                    <AddJobs></AddJobs>
                         </PrivateRoute>
            }
            
        ]
    }
])


export default Routs;