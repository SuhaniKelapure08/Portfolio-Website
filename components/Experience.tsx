import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Cummins from "./works/Cummins";
import GDSC from "./works/GDSC";
import Internpe from "./works/Internpe";
import DIAT from "./works/DIAT";
import WTM from "./works/WTM";

const Experience = () => {
  const [workDIAT, setWorkDIAT] = useState(true);
  const [workInternpe, setWorkInternpe] = useState(false);
  const [workGDSC, setWorkGDSC] = useState(false);
  const [workWTM, setWorkWTM] = useState(false);
  const [workCummins, setWorkCummins] = useState(false);

  const handleDIAT = () => {
    setWorkDIAT(true);
    setWorkInternpe(false);
    setWorkGDSC(false);
    setWorkWTM(false);
    setWorkCummins(false);
  };

  const handleInternpe = () => {
    setWorkDIAT(false);
    setWorkInternpe(true);
    setWorkGDSC(false);
    setWorkWTM(false);
    setWorkCummins(false);
  };

  const handleGDSC = () => {
    setWorkDIAT(false);
    setWorkInternpe(false);
    setWorkGDSC(true);
    setWorkWTM(false);
    setWorkCummins(false);
  };
  const handleWTM = () => {
    setWorkDIAT(false);
    setWorkInternpe(false);
    setWorkGDSC(false);
    setWorkWTM(true);
    setWorkCummins(false);
  };
  const handleCummins = () => {
    setWorkDIAT(false);
    setWorkInternpe(false);
    setWorkGDSC(false);
    setWorkWTM(false);
    setWorkCummins(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleDIAT}
            className={`${
              workDIAT
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            DRDO-DIAT
          </li>
          <li
            onClick={handleInternpe}
            className={`${
              workInternpe
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Internpe
          </li>
          <li
            onClick={handleGDSC}
            className={`${
              workGDSC
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            GDSC
          </li>
          <li
            onClick={handleWTM}
            className={`${
              workWTM
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            WTM
          </li>
          <li
            onClick={handleCummins}
            className={`${
              workCummins
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Cummins
          </li>
        </ul>
        {workDIAT && <DIAT />}
        {workInternpe && <Internpe />}
        {workGDSC && <GDSC />}
        {workWTM && <WTM />}
        {workCummins && <Cummins />}
      </div>
    </section>
  );
};

export default Experience;
