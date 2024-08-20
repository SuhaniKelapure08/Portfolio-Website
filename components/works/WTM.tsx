import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const WTM = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Design Volunteer
        <span className="text-textGreen tracking-wide">@WTM</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2023 - 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Women Techmakers and Google Developer Group Nagpur 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          ●	Contributed in making social media posts and Website UI of Devfest Nagpur 2023 and IWD tech conference of 1500+ attendees.

      </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
         Figma , Canva 
        </li>
      </ul>
    </motion.div>
  );
};

export default WTM;
