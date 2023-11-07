import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";


const Login = () => {
   const [showPassword,setShowPassword]=useState(true)
   const{googleSignUp,login}=useAuth()
   const navigate=useNavigate()
    const location=useLocation()
    // console.log(location);


   const popUp=()=>{
      googleSignUp()
      .then(()=>{
         swal('You are successfully signed up')
         navigate(location?.state ? location.state:"/")
      })
      .catch(err=>{
         swal(err.message)
      })
   }

   const handleLogin=e=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    // console.log(email,password);
    login(email,password)
    .then(()=>{
      swal('You are successfully signed up')
      navigate(location?.state ? location.state:"/")
    })
    .catch(err=>{
      swal(err.message)
   })
 }




    return (
        <div className="hero min-h-screen bg-base-200">
          <Helmet>
                <title>Log in</title>
            </Helmet>
        <div className="hero-content flex-col lg:flex-row items-center lg:gap-72 ">

          <div className="text-center lg:text-left">
            
              <img className="w-[600px] lg:block hidden" src={'https://i.ibb.co/Vq0StJs/homepage-inset-1.png'} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center p-5 font-bold  bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input name="password" type={showPassword?"text":"password"} placeholder="password" className="input input-bordered w-full" required />

                <span onClick={()=>setShowPassword(!showPassword)} className="absolute top-4 right-1">{showPassword?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>
 

                </div>
                <label className="label">
                 
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-red-500 to-blue-500 ">Login</button>
              </div>

              <p>Have No Account? please <Link to="/register" className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Register</Link></p>
            </form>
            <p className="text-center font-semibold text-lg p-2 border-b-4 w-3/4 mx-auto">sign up with</p>

            <div className="text-center p-4 font-bold text-2xl">
               <button onClick={popUp}><FcGoogle></FcGoogle> </button>
            </div>
          </div>

          


        </div>
      </div>
    );
};

export default Login;