import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";



const UpdateJob = () => {
const data=useLoaderData()
const{_id, photo,title,UserName,salary,description,applicants}=data
// console.log(data);
const navigate=useNavigate()



const [startDate, setStartDate] = useState(new Date());
   
  
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };




const handleSubmit=e=>{
    e.preventDefault()

    const form=e.target;
    const photo=form.photo.value;
    const UserName=form.name.value;
    const category=selectedOption;
    const salary=form.salary.value;
    const description=form.description.value;
   
    const deadLine=startDate;
    const applicants=form.applicant.value;
    const title=form.title.value;

    const update={
      photo,title,UserName,category,deadLine,salary,description,applicants
    }

    // console.log(job);

  axios.put(`https://job-hunter-server-olive.vercel.app/jobs/${_id}`,update)
  .then(res=>{
    console.log(res.data);
    if(res?.data?.modifiedCount>0){
        swal('Your Job is updated Successfully')
        navigate(-1)
    }
  })
  .catch(err=>{
    console.log(err);
  })

}

    return (
        <div className="w-[95%] mx-auto">
            <Helmet>
                <title>Find Job | Update</title>
            </Helmet>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full   gap-2">
               
            <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input defaultValue={photo} name="photo" type="text" placeholder="Picture URL" className="input input-bordered input-primary w-full " required />
                </div>
  
                <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input defaultValue={UserName} name="name" type="text" placeholder="User Name" className="input input-bordered input-primary w-full" required />
                </div>
  
            </div>
  
  
            <div className="flex w-full   gap-2">
               
            <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">Job Category</span>
                  </label>
                  <select
          id="mySelect"
          className="input input-bordered input-primary w-full"
          value={selectedOption}
         
          onChange={handleSelectChange}
          required
        >
          <option value="">Select...</option>
          <option value="On Site Job">On Site Job</option>
          <option value="Remote Job">Remote Job</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Part Time">Part Time</option>
        </select>
                </div>
  
                <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">Salary Range</span>
                  </label>
                  <input defaultValue={salary} name="salary" type="text" placeholder="Salary Range" className="input input-bordered input-primary w-full" required />
                </div>
  
            </div>
  
  
            <div className="flex w-full   gap-2">
               
            <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">Job Description</span>
                  </label>
                  <input defaultValue={description} name="description" type="text" placeholder="Job Description" className="input input-bordered input-primary w-full " required />
                </div>
  
                
                <div className="form-control w-[50%]">
                  <label className="label">
                    <span className="label-text">Job Title</span>
                  </label>
                  <input defaultValue={title} name="title" type="text" placeholder="Job Title" className="input input-bordered input-primary w-full " required />
                </div>


  
            </div>
  
  
            <div className="flex w-full   gap-2">
               
               <div className="form-control w-[50%]">
                     <label className="label">
                       <span className="label-text">Application Dead Line</span>
                     </label>
                     <DatePicker className="input input-bordered input-primary w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                   </div>
     
                   <div className="form-control w-[50%]">
                     <label className="label">
                       <span className="label-text">Job Applicants Number</span>
                     </label>
                     <input defaultValue={applicants} name="applicant" type="number" placeholder="User Name" className="input input-bordered input-primary w-full" required />
                   </div>
     
               </div>
  
               
  
               <input className="btn w-full mt-5 bg-gradient-to-r from-red-500 to-blue-500" type="submit" value="Update" />
          </form>
        </div>
      </div>
    );
};

export default UpdateJob;