
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div  className="mt-10">
            <motion.div   whileHover={{ scale:1, rotate: 360 }}
        whileTap={{
          scale:.2,
          rotate: 360,
          borderRadius: "100%"
        }} className="lg:flex flex-row-reverse   shadow-2xl shadow-black">
                    <div className="lg:w-[50%] p-5"> 
                         <h1 className="text-gray-500 font-semibold text-xl ">Martin Schneider</h1>
                         <p className="text-black">Martin R. Schneider is a certified Human Resources specialist and Organizational Development practitioner with nearly a decade of experience in career services and people operations. Using his talent management and organizational experience, he helps clients define their goals, target opportunities, and execute effective career transition strategies. Through hands-on coaching, informative training, and creative tools, he guides career-changers through the entire job hunt process.
                         </p>
                    </div> 
                    <div className="lg:w-[50%] p-7">
                        <img className="border-4 border-green-600 rounded-full" src={'https://i.ibb.co/jMFqm83/Marty.webp'} alt="" />
                    </div>
            </motion.div>   


            <motion.div   whileHover={{ scale:1, rotate: 360 }}
        whileTap={{
          scale:.2,
          rotate: 360,
          borderRadius: "100%"
        }}  className="lg:flex flex-row-reverse mt-10  shadow-2xl shadow-black">


            <div className="lg:w-[50%] p-7 flex justify-end">
                        <img className="border-4  border-green-600 rounded-full" src={'https://i.ibb.co/HYt2H2G/Dan.webp'} alt="" />
                    </div>


                    <div className="lg:w-[50%] p-5"> 
                         <h1 className="text-gray-500 font-semibold text-xl ">Daniel Ludwig</h1>
                         <p className="text-black">Dan is a professional resume writer and copywriter with hundreds of resumes, CVs, and LinkedIn profiles under his belt. He is written across almost every field, industry, and specialty, and specializes in a fast writing process and a content driven style. He uses a unique combination of intensive factfinding and marketing-style copy to give each client a distinct brand and message. 


                         </p>
                    </div> 
                    
            </motion.div>


            <motion.div    whileHover={{ scale:1, rotate: 360 }}
        whileTap={{
          scale:.2,
          rotate: 360,
          borderRadius: "100%"
        }} className="lg:flex flex-row-reverse mt-10  shadow-2xl shadow-black">
                    <div className="lg:w-[50%] p-5"> 
                         <h1 className="text-gray-500 font-semibold text-xl ">Frank Hackett
</h1>
                         <p className="text-black">Frank is a professional resume writer who excels in personal branding. With over five years of experience as a lead editor at a boutique consulting firm, Frank developed a collaborative process to resume writing that empowers clients to tell their professional stories. His customer-first approach is essential to developing the best possible professional document. Frank has a passion for helping clients to leverage unique aspects of their experience to create targeted resumes that truly speak to hiring managers within their industries.


                         </p>
                    </div> 
                    <div className="lg:w-[50%] p-7">
                        <img className="border-4 border-green-600 rounded-full" src={'https://i.ibb.co/0Z02kjf/Frank.webp'} alt="" />
                    </div>
            </motion.div>  
        </div>
    );
};

export default AboutUs;