import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";

const Nav = () => {

    const {logOut,user}=useAuth()
    //  console.log(user);

     const signOut=()=>{
        logOut()
        .then(()=>{
            swal('You are logged Out')
        })
        .catch((err)=>{
            swal(err.message)
        })
     }

const navLink=<div className="flex gap-6">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ?  "pending" : isActive ? "text-red-600 underline" : ""  }> Home</NavLink>


              <NavLink to="/all-jobs" className={({ isActive, isPending }) => isPending ?  "pending" : isActive ? "text-red-600 underline" : ""  }> All Jobs</NavLink>


              

              <NavLink to="/blogs" className={({ isActive, isPending }) => isPending ?  "pending" : isActive ? "text-red-600 underline" : ""  }> Blogs</NavLink>


              {
                user?<div className="flex gap-6">
                    <NavLink to="/applied-jobs" className={({ isActive, isPending }) => isPending ?  "pending" : isActive ? "text-red-600 underline" : ""  }> Applied Jobs</NavLink>


                    <NavLink to="/add-jobs" className={({ isActive, isPending }) => isPending ?  "pending" : isActive ? "text-red-600 underline" : ""  }> Add a Job</NavLink>

                    <NavLink to="/my-jobs" className={({ isActive, isPending }) => isPending ?  "pending" : isActive ? "text-red-600 underline" : ""  }> My Jobs</NavLink>
                </div> :

                 <NavLink to="/login" className={({ isActive, isPending }) => isPending ?  "pending" : isActive ? "text-red-600 underline" : ""  }>Log in</NavLink>
              }
            </div>

           



    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <img className="w-28 rounded-full" src={'https://i.ibb.co/XSHzcJ4/download.png'} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user&& <div className="flex gap-2 ">
             <div className="flex gap-2 items-center ">
             
             <p className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">{user?.displayName}</p>
             <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
             </div>
             <Link to="/login">
             <button onClick={signOut} className="btn bg-gradient-to-r from-red-500 to-blue-500">Log Out</button>
             </Link>
        </div>
    }
  </div>
</div>
    );
};

export default Nav;