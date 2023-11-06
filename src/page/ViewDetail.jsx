import { Link, useLoaderData } from "react-router-dom";

const ViewDetail = () => {
    const job=useLoaderData()
    const{_id,UserName, deadLine,description , photo, postDate, salary, title}=job
    // console.log(job);
    return (
        <div className="w-[95%] mx-auto mt-10">
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
     <Link to={`/apply/${_id}`}>
     <button className="btn bg-gradient-to-r from-red-500 to-blue-500">Apply now</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetail;