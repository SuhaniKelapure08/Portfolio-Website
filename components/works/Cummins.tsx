import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Cummins = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front End
        <span className="text-textGreen tracking-wide">@Cummins College</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          International Conference Website (Live Project) 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          ●	Collaborated on a group project to develop a dynamic website for an international conference hosted by Cummins College Nagpur.
            Utilized HTML, CSS, and JavaScript to create a responsive and interactive web platform.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          ●	Contributed to the front-end development and Integrated dynamic content and functionalities to showcase conference details, schedules, speakers, and registration information.
            Website:-  https://www.icraset2k23.com/


        </li>
      </ul>
    </motion.div>
  );
};

export default Cummins;
