import { useState } from "react";
import SectionTitle from "./SectionTitle";
import School from "./Institutions/School";
import College from "./Institutions/College";
import University from "./Institutions/University";
import {motion} from "framer-motion"

const Experience = () => {
  
  const [workUniversity, setWorkUniversity] = useState(false);
  const [workCollege, setWorkCollege] = useState(false);
  const [workSchool, setWorkSchool] = useState(true);

  

  const handleUniversity = () => {
    
    setWorkUniversity(true);
    setWorkCollege(false);
    
    setWorkSchool(false);
  };

  const handleCollege = () => {
    
    setWorkUniversity(false);
    setWorkCollege(true);
   
    setWorkSchool(false);
  };
 
  const handleSchool = () => {
    
    setWorkUniversity(false);
    setWorkCollege(false);
    
    setWorkSchool(true);
  };
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 , y:"-10%"}}
    transition={{ duration:0.5 , delay: .5 }}
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Educational Background" titleNo="" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">

        <li
            onClick={handleSchool}
            className={`${
              workSchool
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            School
          </li>

          <li
            onClick={handleCollege}
            className={`${
              workCollege
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            College
          </li>

          <li
            onClick={handleUniversity}
            className={`${
              workUniversity
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            University
          </li>
         
          
         
        </ul>
        
        {workUniversity && <University />}
        {workCollege && <College />}
       
        {workSchool && <School />}
      </div>
    </motion.section>
  );
};

export default Experience;
