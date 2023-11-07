import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState, } from "react";
import TotalApply from "../Components/TotalApply";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {


    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
  


  const { user } = useAuth();
  const [usersApply,setUsersApply]=useState([])
//   const [filterCategoryApply,setFilterCategoryapply]=useState([])
  const usersMail = user?.email;
//   console.log(usersMail);

  const { data: applied, error } = useQuery({
    queryKey: ['appliedJobs'],
    queryFn: () =>
      fetch('https://job-hunter-server-olive.vercel.app/applications')
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
  });

  useEffect(() => {
    if (error) {
      console.error(error);
   
    }

    if (applied) {
        let filteredApply = applied?.filter(job => job.email === usersMail);

        if (selectedOption && selectedOption !== "All") {
            filteredApply = filteredApply?.filter(job => job.category === selectedOption);
        }

        setUsersApply(filteredApply);
    }
  }, [applied, error, usersMail,selectedOption]);

  // console.log(selectedOption);

  return (
   <div className="w-[95%] mx-auto">
    <Helmet>
                <title>Applied-Jobs</title>
            </Helmet>

<div className="mb-10">

<select
    id="mySelect"
    className="input input-bordered input-primary w-[20%]"
    value={selectedOption}
    onChange={handleSelectChange}
    required
>
    <option value="All">All</option>
    <option value="On Site Job">On Site Job</option>
    <option value="Remote Job">Remote Job</option>
    <option value="Hybrid">Hybrid</option>
    <option value="Part Time">Part Time</option>
</select>
</div>


     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">





      {
         usersApply?.map(apply=><TotalApply
            key={apply._id}
            apply={apply}
            ></TotalApply>)
      }
    </div>
   </div>
  );
};

export default AppliedJobs;
