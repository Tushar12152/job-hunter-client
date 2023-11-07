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
import MyJobs from "../page/MyJobs";
import UpdateJob from "../page/UpdateJob";
import AppliedJobs from "../page/AppliedJobs";

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
                path:"/apply/:id",
                element:<PrivateRoute>
                         <Apply></Apply>
                        </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5002/jobs/${params.id}`)
            },
            {
                path:"/my-jobs",
                element:<PrivateRoute>
                    <MyJobs></MyJobs>
                     </PrivateRoute>
            },
            {
                path:"/update/:id",
                element:<PrivateRoute>
                    <UpdateJob></UpdateJob>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5002/jobs/${params.id}`)
            },
            {
                path:"/applied-jobs",
                element:<AppliedJobs></AppliedJobs>
            }
            
        ]
    }
])


export default Routs;