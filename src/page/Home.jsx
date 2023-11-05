import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import JobCategory from "../Components/JobCategory";

const Home = () => {
    return (
        <div className="w-[95%] mx-auto">
            <Banner></Banner>
            <JobCategory></JobCategory>

            <Footer></Footer>
        </div>
    );
};

export default Home;