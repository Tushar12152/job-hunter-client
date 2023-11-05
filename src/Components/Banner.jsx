

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/4tkxm6g/Banner.jpg')] max-w-full h-screen bg-no-repeat rounded-lg bg-cover relative  opacity-70">
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                 <h1 className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent text-2xl lg:text-5xl font-semibold lg:font-bold animate__animated animate__fadeIn animate__delay-2s">Find Your Dream Job Here</h1>
                 <p className="text-center lg:font-semibold  lg:text-xl  mt-2 text-black">Achive skill and get reward....! We are with you to fulfill your dreams. Work hard you will succeed  </p>

                 <div className="flex items-center gap-2 justify-center mt-5">
                 <textarea className="border-red-300 border-2 rounded-lg" name="" id="" cols="25" rows="1"></textarea>
                 <button className="btn bg-gradient-to-r from-red-500 to-blue-500">Search</button>
                 </div>
            </div>

        </div>
    );
};

export default Banner;