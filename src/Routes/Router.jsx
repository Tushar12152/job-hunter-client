
import { Outlet } from 'react-router-dom';
import Nav from './../Components/Nav';
import Footer from '../Components/Footer';
const Router = () => {
    return (
        <div >
             <div className='min-h-screen'>
             <Nav></Nav>
             <Outlet></Outlet>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Router;