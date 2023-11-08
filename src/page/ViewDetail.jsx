import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const ViewDetail = () => {
    const job=useLoaderData()
    const{_id,UserName,email, deadLine,description , photo, postDate, salary, title}=job;
    const {user}=useAuth()
    const loggedEmail=user?.email;
    // console.log(loggedEmail);
    // console.log(email);


    const canApply = loggedEmail !== email;
    const isDeadlineExpired = new Date(deadLine) < new Date();

    return (
        <div className="w-[95%] mx-auto mt-10">
            <Helmet>
                <title>Find Job | View-Details</title>
            </Helmet>
             <div className="card lg:card-side bg-base-100 shadow-2xl w-[80%] mx-auto ">
  <figure className="lg:w-[50%]"><img className="w-full p-5" src={photo} alt="Album"/></figure>
  <div className="card-body lg:w-[50%]">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p className="font-semibold">Posted: {UserName}</p>
    <p className="">Application Deadline: {deadLine}</p>
    <p>Posted Date: {postDate}</p>
    <p>Salary: {salary} Taka</p>
    <div className="card-actions justify-end">
  


                        {!isDeadlineExpired && canApply && (
                            <Link to={`/apply/${_id}`}>
                                <button className="btn bg-gradient-to-r from-red-500 to-blue-500">Apply now</button>
                            </Link>
                        )}
                        {isDeadlineExpired && (
                            <div className="text-red-500 font-bold">Application deadline has passed</div>
                        )}
                        {!canApply && (
                            <div className="text-red-500 font-bold">You cannot apply to your own job posting</div>
                        )}




    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetail;