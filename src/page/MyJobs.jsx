import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import Job from "../Components/job";
import Myjob from "../Components/Myjob";


const MyJobs = () => {

    const {user}=useAuth()
    // console.log(user.email);
    const userMail=user?.email;


    const {isLoading,data:allJobs } = useQuery({
        queryKey: ['AllJob'],
        queryFn: () =>
          fetch('http://localhost:5002/jobs').then(
            (res) => res.json(),
          ),
      })


      if(isLoading){
        return <span className="loading loading-infinity loading-lg"></span>
      }

    //   console.log(allJobs);
    const myJobs=allJobs.filter(jobs=>jobs.email===userMail)
    console.log(myJobs);






    return (
        <div className="w-[95%] mx-auto">
            {
                myJobs.length>0 ?




                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
              myJobs.map(job=><Myjob key={job._id} job={job}></Myjob>)
                }
                  </div>
                :

            <div>
                <p className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent text-2xl font-bold text-center mt-10">You have not any added Job </p>
            </div>
            }

           


        </div>
    );
};

export default MyJobs;