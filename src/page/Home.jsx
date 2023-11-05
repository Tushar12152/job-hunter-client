import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";

import JobCategory from "../Components/JobCategory";

const Home = () => {
    return (
        <div className="w-[95%] mx-auto">
            <Banner></Banner>
            <JobCategory></JobCategory>

            <h1 className='bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent text-2xl lg:text-5xl font-semibold lg:font-bold text-center pt-20 pb-10'>About Us</h1>

            <AboutUs></AboutUs>

        
        </div>
    );
};

export default Home;