
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const{ _id,applicants, deadLine, photo, postDate, salary, title}=job
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-[300px] object-cover p-5 w-full' src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Post Date : {postDate}</p>
    <p>Deadline : {deadLine}</p>
    <p>Salary : {salary} Taka</p>
    <p>Applicant : {applicants}</p>
    <div className="card-actions justify-end">
     <Link to={`/detail/${_id}`}>
     <button  className="btn bg-gradient-to-r from-red-500 to-blue-500">View Detail</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

Job.propTypes = {
  job:PropTypes.object  
};

export default Job;