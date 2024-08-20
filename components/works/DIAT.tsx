import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const DIAT = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Data Analytics

        <span className="text-textGreen tracking-wide">@DIAT-DRDO</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      10 Jan - 14 Mar 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          ●	Completed a 2-month onsite internship at the Defence Institute of Advanced Technology (DIAT).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          ●	Worked on the Project:-  Data Analytics on Rainfall Change Pattern Over Solar Farms locations in India using Python.
          </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-justify">
            <TiArrowForward />
          </span>
          Utilized Python to analyze and visualize real-time rainfall data to assess its impact on solar farm locations across India.
  Extracted, cleaned, and processed large datasets from multiple sources to ensure accuracy and reliability.
  Implemented data visualization techniques using libraries such as Matplotlib and Seaborn to identify patterns and trends.
  Provided actionable insights and recommendations for optimizing solar farm operations based on rainfall patterns.
  Collaborated with a multidisciplinary team to enhance the decision-making process for sustainable energy production.
        </li>
      </ul>
    </motion.div>
  );
};

export default DIAT;
