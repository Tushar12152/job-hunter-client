// import { Navigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import { PropTypes } from 'prop-types';
// import { swal } from 'sweetalert';

// const PrivateRoute = ({children}) => {
// const {loading,user}=useAuth()

// if(loading){
//     return  <div className="flex flex-col gap-2 items-center justify-center mt-40">
//          <progress className="progress progress-accent w-56" value={0} max="100"></progress>
// <progress className="progress progress-accent w-56" value="10" max="100"></progress>
// <progress className="progress progress-accent w-56" value="40" max="100"></progress>
// <progress className="progress progress-accent w-56" value="70" max="100"></progress>
// <progress className="progress progress-accent w-56" value="100" max="100"></progress>
//     </div>
// }


// if(user){

//     return children;
// }

// else{
//     // Use swal to display an alert
//     swal('You have to log in first to view details').then(() => {
//       return <Navigate to='/login' />;
//     });
//   }

// };

// PrivateRoute.propTypes={
//     children:PropTypes.node,
// }
// export default PrivateRoute;



import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';
import swal from 'sweetalert'; // Import swal

const PrivateRoute = ({children}) => {
  const {loading,user}=useAuth()

  if(loading){
    return  (
      <div className="flex flex-col gap-2 items-center justify-center mt-40">
        <progress className="progress progress-accent w-56" value={0} max="100"></progress>
        <progress className="progress progress-accent w-56" value="10" max="100"></progress>
        <progress className="progress progress-accent w-56" value="40" max="100"></progress>
        <progress className="progress progress-accent w-56" value="70" max="100"></progress>
        <progress className="progress progress-accent w-56" value="100" max="100"></progress>
      </div>
    );
  }

  if(user){
    return children;
  }
  else{
  
    swal('You have to log in first to view details')
      return <Navigate to='/login'></Navigate>
   
  }
};

PrivateRoute.propTypes={
  children:PropTypes.node,
}

export default PrivateRoute;
