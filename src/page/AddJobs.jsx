import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";

const AddJobs = () => {
    onst [startDate, setStartDate] = useState(new Date());
    const{user}=useAuth()
    const email=user?.email
  
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };c


    const handleSubmit=e=>{
        e.preventDefault()

        const form=e.target;
        const photo=form.photo.value;
        const UserName=form.name.value;
        const category=selectedOption;
        const salary=form.salary.value;
        const description=form.description.value;
        const postDate=form.date.value;
        const deadLine=startDate;
        const applicants=form.applicant.value;
        const title=form.title.value;

        const job={
          email, photo,title,UserName,category,deadLine,salary,description,postDate,applicants
        }

        // console.log(job);

      axios.post("http://localhost:5002/jobs",job)
      .then(res=>{
        // console.log(res.data);
        if(res.data.insertedId){
            swal('Your Job is Successfully added')
        }
      })
      .catch(err=>{
        console.log(err);
      })

    }

  return (
    <div className="w-[95%] mx-auto">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full   gap-2">
             
          <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input name="photo" type="text" placeholder="Picture URL" className="input input-bordered input-primary w-full " required />
              </div>

              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input defaultValue={user?.displayName} name="name" type="text" placeholder="User Name" className="input input-bordered input-primary w-full" required />
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
                <input name="salary" type="text" placeholder="Salary Range" className="input input-bordered input-primary w-full" required />
              </div>

          </div>


          <div className="flex w-full   gap-2">
             
          <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Job Description</span>
                </label>
                <input name="description" type="text" placeholder="Job Description" className="input input-bordered input-primary w-full " required />
              </div>

              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Job Posting Date</span>
                </label>
                <input name="date" type="date" placeholder="User Name" className="input input-bordered input-primary w-full" required />
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
                   <input defaultValue='00' name="applicant" type="number" placeholder="User Name" className="input input-bordered input-primary w-full" required />
                 </div>
   
             </div>

             <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input name="title" type="text" placeholder="Job Title" className="input input-bordered input-primary w-full " required />
              </div>

             <input className="btn w-full mt-5 bg-gradient-to-r from-red-500 to-blue-500" type="submit" value="Add Job" />
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
