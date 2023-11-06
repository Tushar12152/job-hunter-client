import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";

const Apply = () => {

const applyedJobs=useLoaderData()

const{ photo, title, UserName, category, deadLine, salary, description, postDate, applicants}=applyedJobs;

// console.log(applyedJobs)




    const {data } = useQuery({
        queryKey: ['job'],
        queryFn: () =>
          fetch('http://localhost:5002/users').then(
            (res) => res.json(),
          ),
      })
    
      // console.log(data);
        const {user}=useAuth()
        //  console.log(user);
    
        const profile= data?.find(item=>item?.email===user?.email)
        // const{name,photo}=profile;
    
        // console.log(profile);












  const handleApplication=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const email=form.mail.value;
    const resumi=form.resumi.value;
    const apply={name,email,resumi, photo, title, UserName, category, deadLine, salary, description, postDate, applicants}

    // console.log(apply);

    axios.post("http://localhost:5002/applications",apply)
      .then(res=>{
        // console.log(res.data);
        if(res.data.insertedId){
            swal('Your Application is Successfully submitted')
        }
      })
      .catch(err=>{
        swal(err.message)
      })
  }




    return (
        <div className="w-[95%] mx-auto">
            <form onSubmit={handleApplication}>

            <div className="flex w-full   gap-2">
             
             <div className="form-control w-[50%]">
               <label className="label">
                 <span className="label-text">User Name</span>
               </label>
               <input defaultValue={profile?.name|| user?.displayName} name="name" type="text" placeholder="User Name" className="input input-bordered input-primary w-full" required />
             </div>

             <div className="form-control w-[50%]">
               <label className="label">
                 <span className="label-text">User Email</span>
               </label>
               <input defaultValue={profile?.email||user?.email} name="mail" type="text" placeholder="User Email" className="input input-bordered input-primary w-full" required />
             </div>

         </div>

         <div className="form-control w-[50%] mx-auto">
               <label className="label">
                 <span className="label-text">Resumi Link</span>
               </label>
               <input name="resumi" type="text" placeholder="Put Your Resumi Link Here......" className="input input-bordered input-primary w-full" required />
             </div>

             <input className="btn w-full mt-5 bg-gradient-to-r from-red-500 to-blue-500" type="submit" value="submit your application" />
            </form>
        </div>
    );
};

export default Apply;