import { createBrowserRouter } from "react-router-dom";
import Router from "./Router";
import Login from "../page/login";
import Register from "../page/Register";
import Home from "../page/Home";
import AddJobs from "../page/AddJobs";
import PrivateRoute from "./PrivateRoute";
import ViewDetail from "../page/ViewDetail";
import ErrorPage from "../page/ErrorPage";
import AllJobs from "../Components/AllJobs";
import Blog from "../page/Blog";
import Apply from "./Apply";

const Routs =createBrowserRouter([
    {
        path:"/",
        element:<Router></Router>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:"/detail/:id",
                element:<PrivateRoute>
                     <ViewDetail></ViewDetail>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5002/jobs/${params.id}`)
            },
            {
                path:'/all-jobs',
                element:<AllJobs></AllJobs>
                        
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/apply",
                element:<PrivateRoute>
                         <Apply></Apply>
                        </PrivateRoute>
            }
            
        ]
    }
])


export default Routs;