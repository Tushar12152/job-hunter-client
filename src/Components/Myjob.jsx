
import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import swal from 'sweetalert';


const Myjob = ({job}) => {

    const{ _id,applicants, deadLine, photo, postDate, salary, title}=job



    const handleDelete=(id)=>{
        console.log(id);
        axios.delete(`http://localhost:5002/jobs/${id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.deletedCount>0){
                swal('Your job is Successfully deteted')
            }
          })
          .catch(err=>{
            swal(err.message)
          })

    }




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
    <div className="flex justify-around pt-5">
        <button onClick={()=>handleDelete(_id)} className='btn bg-gradient-to-r from-red-500 to-blue-500'><AiFillDelete></AiFillDelete></button>
        <button className='btn bg-gradient-to-r from-red-500 to-blue-500'><GrUpdate></GrUpdate> </button>
     
    </div>
  </div>
</div>
        </div>
    );
};

Myjob.propTypes = {
     job:PropTypes.object,
};

export default Myjob;