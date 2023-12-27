import { PriorityIcon } from "../../icons/PriorityIcon";
import Status from "../Status";

const Client = () => {
  return (
    <>
      <h1 className="font-semibold text-[28px]  px-5 pt-4">Гречеслав Крупов</h1>
      <div className="flex gap-3 items-center pl-8 mt-6 pt pb-5">
        <Status />
        <div className=" flex items-center gap-1 font-light text-sm text-[#B8BBC3]">
          <PriorityIcon /> Low priority
        </div>
      </div>
    </>
  );
};

export default Client;
