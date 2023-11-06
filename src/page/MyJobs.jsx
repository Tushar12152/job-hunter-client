

import  { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import Myjob from "../Components/Myjob";

const MyJobs = () => {
    const { user } = useAuth();
    const userMail = user?.email;

    const { data: allJobs, isLoading } = useQuery({
        queryKey: ['alldata'],
        queryFn: () =>
            fetch('http://localhost:5002/jobs').then(
                (res) => res.json(),
            ),
    });

    const [myJob, setMyJob] = useState([]);

    useEffect(() => {
        if (allJobs) {
            const filteredJobs = allJobs.filter(job => job.email === userMail);
            setMyJob(filteredJobs);
        }
    }, [allJobs, userMail]);

    if (isLoading) {
        return <p>Loading...</p>; // Display a loading indicator while data is being fetched
    }

    return (
        <div className="w-[95%] mx-auto">
            {myJob.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myJob.map(job => (
                        <Myjob
                            key={job._id}
                            job={job}
                            setmyJob={setMyJob}
                            myJob={myJob}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <p className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent text-2xl font-bold text-center mt-10">
                        You have not added any Job
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyJobs;