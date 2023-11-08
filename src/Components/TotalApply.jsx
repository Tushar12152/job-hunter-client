
import axios from 'axios';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

const TotalApply = ({apply,setUsersApply,usersApply})=> {
    // console.log(apply);

    const{UserName,_id,  category, email, photo,title}=apply


    const handleDelete=(id)=>{



      swal({
          title: "Are you sure?",
          text: "you want to cancel your application???",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          //   swal("Poof! Your imaginary file has been deleted!", {
          //     icon: "success",
          //   });
          axios.delete(`https://job-hunter-server-olive.vercel.app/applications/${id}`)
          .then(res=>{
              console.log(res.data);
              if(res.data.deletedCount>0){
                  swal("success",'Your Application is canceled',"success")
                  const remaining = usersApply.filter(job => job._id !== id);
                  setUsersApply(remaining);
  
              }
            })
            .catch(err=>{
              swal(err.message)
            })





          } else {
            swal("Your application  is safe!");
          }
        });






      // console.log(id);
      

  }




    return (
        <div>
              <div className="card w-96 glass">
  <figure><img className='w-full h-[200px]' src={photo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Job Title: {title}</h2>
    <p>Category:{category}</p>
    <p>Posted by:{UserName}</p>
    <p>email:{email}</p>
    
  </div>
  
  <div className='p-5 mx-auto'>
  <button onClick={()=>handleDelete(_id)} className='btn bg-gradient-to-r from-red-500 to-blue-500'>cancel Application</button>
  </div>


</div>
        </div>
    );
};

TotalApply.propTypes = {
    apply:PropTypes.object,
    setUsersApply:PropTypes.node,
    usersApply:PropTypes.node,
};

export default TotalApply;