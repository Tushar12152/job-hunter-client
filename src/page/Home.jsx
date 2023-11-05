import Banner from "../Components/Banner";
import JobCategory from "../Components/JobCategory";

const Home = () => {
    return (
        <div className="w-[95%] mx-auto">
            <Banner></Banner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;