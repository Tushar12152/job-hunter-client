

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
// import Job from "./job";
import { Helmet } from "react-helmet-async";
import AllJobTable from "./AllJobTable";

const AllJobs = () => {
    const { data } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
          fetch('https://job-hunter-server-olive.vercel.app/jobs').then(
            (res) => res.json(),
          ),
    });

    const [titleSearch, setTitleSearch] = useState('');

    

    const filteredJobs = data && data?.filter(job => job.title.toLowerCase().includes(titleSearch.toLowerCase()));
   

    return (
       <div>
        <Helmet>
                <title>All-Jobs</title>
            </Helmet>
           <form >
               <div className="flex items-center justify-center gap-2 py-5 w-[95%] mx-auto">
                   <div className="form-control w-[50%] flex items-center justify-center">
                       <input 
                           name="search" 
                           type="search" 
                           placeholder="Search by Job Title..." 
                           className="input input-bordered input-primary w-full" 
                           required
                           value={titleSearch}
                           onChange={(e) => setTitleSearch(e.target.value)}
                       />
                   </div>
                   <input className="btn bg-gradient-to-r from-red-500 to-blue-500" type="submit" value="Search" />
               </div>
           </form>
           <div  className="overflow-x-auto w-[95%] mx-auto ">


           <table className="table">
    {/* head */}
    <thead>
      <tr>



       <th> posted by</th>
        
       
        <th>Job Title</th>
        <th>Job Posting Date</th>
        <th> Application Deadline</th>
        <th>Salary range</th>
        <th> view Details</th>
      </tr>
    </thead>
    
   
    <tbody>

    {filteredJobs ? filteredJobs.map(job => <AllJobTable key={job._id} job={job}></AllJobTable>) : (data && data.map(job => <AllJobTable key={job._id} job={job}></AllJobTable>))}

    </tbody>


    
  </table>

    
           </div>
       </div>
    );
};

export default AllJobs;





