

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Job from "./job";
import { Helmet } from "react-helmet-async";

const AllJobs = () => {
    const { data } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
          fetch('http://localhost:5002/jobs').then(
            (res) => res.json(),
          ),
    });

    const [titleSearch, setTitleSearch] = useState('');

    

    const filteredJobs = data && data.filter(job => job.title.toLowerCase().includes(titleSearch.toLowerCase()));
   

    return (
       <div>
        <Helmet>
                <title>All-Jobs</title>
            </Helmet>
           <form >
               <div className="flex items-center justify-center gap-2 py-5">
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
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto gap-6">
               {filteredJobs ? filteredJobs.map(job => <Job key={job._id} job={job}></Job>) : (data && data.map(job => <Job key={job._id} job={job}></Job>))}
           </div>
       </div>
    );
};

export default AllJobs;
