import { useQuery } from "@tanstack/react-query";
import Job from "./job";

const AllJobs = () => {
    const { data } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
          fetch('http://localhost:5002/jobs').then(
            (res) => res.json(),
          ),
      })

// console.log(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto gap-6">
            {
               data&& data.map(job=><Job key={job._id} job={job}></Job>)
            }
        </div>
    );
};

export default AllJobs;