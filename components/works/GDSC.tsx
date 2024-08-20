import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const GDSC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Team Lead
        <span className="text-textGreen tracking-wide">@GDSC</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
         2023 - 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Google Developer Student Clubs (GDSC)
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          ●	Selected as GDSC LEAD of Cummins College by Google for developers and GDSC Team.
           After a series of selection rounds and a personal Interview by Google for developers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          ●	Organized workshops, study jams, and tech talks to promote learning and collaboration within the student community. 
          Promoted Google technologies and collaborated with educators to facilitate networking opportunities and skill-building initiatives.
        </li>
      </ul>
    </motion.div>
  );
};

export default GDSC;
