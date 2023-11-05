import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";


const Register = () => {
 const [showPassword,setShowPassword]=useState(true)
 const {createUser}=useAuth()


 const handleRegister=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const photo=form.photo.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,photo,email,password);
    createUser(email,password)
    .then(res=>{
        console.log(res?.user);
        swal("success","Your Ragistration is successfully compleate", "success")

    })
    .catch(err=>{
        swal(err.message)
    })

 }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center lg:gap-72 ">

          <div className="text-center lg:text-left">
            
              <img className="w-[600px] lg:block hidden" src={'https://i.ibb.co/Vq0StJs/homepage-inset-1.png'} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center p-5 font-bold  bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Register Here</h1>
            <form onSubmit={handleRegister} className="card-body">


            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
              </div>


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
                <button className="btn bg-gradient-to-r from-red-500 to-blue-500 ">Register</button>
              </div>

              <p className="p-3">Already Have An Account? please <Link to="/login" className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Login</Link></p>
            </form>
            
          </div>

          


        </div>
      </div>
    );
};

export default Register;