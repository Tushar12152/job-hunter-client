
import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const Myjob = ({job,myJob,setmyJob}) => {

    const{ _id,applicants, deadLine, photo, postDate, salary, title}=job



    const handleDelete=(id)=>{



        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            //   swal("Poof! Your imaginary file has been deleted!", {
            //     icon: "success",
            //   });
            axios.delete(`http://localhost:5002/jobs/${id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.deletedCount>0){
                    swal('Your job is Successfully deteted',"success")
                    const remaining = myJob.filter(job => job._id !== id);
                    setmyJob(remaining);
    
                }
              })
              .catch(err=>{
                swal(err.message)
              })





            } else {
              swal("Your added job  is safe!");
            }
          });






        console.log(id);
        

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
        <Link to={`/update/${_id}`}>
        <button className='btn bg-gradient-to-r from-red-500 to-blue-500'><GrUpdate></GrUpdate> </button>
        </Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

Myjob.propTypes = {
     job:PropTypes.object,
     myJob:PropTypes.array,
     setmyJob:PropTypes.node,
};

export default Myjob;