import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState, } from "react";
import TotalApply from "../Components/TotalApply";

const AppliedJobs = () => {
  const { user } = useAuth();
  const [usersApply,setUsersApply]=useState([])
  const usersMail = user?.email;
//   console.log(usersMail);

  const { data: applied, error } = useQuery({
    queryKey: ['appliedJobs'],
    queryFn: () =>
      fetch('http://localhost:5002/applications')
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
      const filterAplly = applied.filter(job => job.email === usersMail);
    //   console.log(filterAplly);
    setUsersApply(filterAplly)
    }
  }, [applied, error, usersMail]);

  return (
    <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
         usersApply.map(apply=><TotalApply
            key={apply._id}
            apply={apply}
            ></TotalApply>)
      }
    </div>
  );
};

export default AppliedJobs;
