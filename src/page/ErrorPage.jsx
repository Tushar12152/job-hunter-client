import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
       <div className="w-[50%] mx-auto ">
         <div >
<img className="w-full" src={'https://i.ibb.co/LRzbLRV/images.jpg'} alt="" />


<Link className="absolute lg:top-[450px] left-40 lg:left-[650px]" to='/'> <button className="btn bg-gradient-to-r from-red-500 to-blue-500">Home</button></Link>
  
</div>
       </div>
    );
};

export default ErrorPage;