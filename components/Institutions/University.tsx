import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const University = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        
        <span className="text-textGreen tracking-wide">Shahjalal University of Science and Technology</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2019 to 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          BSc. in CSE
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          CGPA 3.14
        </li>
      </ul>
    </motion.div>
  );
};

export default University;
