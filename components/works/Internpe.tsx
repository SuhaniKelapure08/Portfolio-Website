import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Internpe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">@Internpe</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        24 Apr to 21 May 2023 
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          1 month Online Internship in Web Development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          Created a Simple To-Do List app using HTML, CSS, and JavaScript to help users manage tasks.
          Built a functional calculator with basic arithmetic operations.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          Improved front-end web development skills and learned about UI/UX design.
        </li>
      </ul>
    </motion.div>
  );
};

export default Internpe;
