
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




const Job = ({job}) => {
    const{ _id,category, deadLine, photo, postDate, salary, title}=job

    // console.log(title);



    const { data:applications } = useQuery({
      queryKey: ['applications'],
      queryFn: () =>
        fetch('https://job-hunter-server-olive.vercel.app/applications/').then(
          (res) => res.json(),
        ),
    });


    // console.log(applications);

    const totalApplicants= applications?.filter(applicant=>applicant.title.toLowerCase()===title.toLowerCase())
    // console.log(totalApplicants?.length);

   



    return (
      
          <div 
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-[300px] object-cover p-5 w-full' src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Post Date : {postDate}</p>
    <p>Deadline : {deadLine}</p>
    <p>Category:{category}</p>
    <p>Salary : {salary} Taka</p>
    <p>Applicant : {totalApplicants?.length}</p>
    <div className="card-actions justify-end">
     <Link to={`/detail/${_id}`}>
     <button  className="btn bg-gradient-to-r from-red-500 to-blue-500">View Detail</button>
     </Link>
    </div>
  </div>
        </div>
       
   
       
        
    );
};

Job.propTypes = {
  job:PropTypes.object  
};

export default Job;