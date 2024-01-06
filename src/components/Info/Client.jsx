import { PriorityIcon } from "../../icons/PriorityIcon";
import Status from "../Status";

const Client = ({ name, status, priority }) => {
  return (
      <div className="px-6 pt-6">
        <h1 className="font-semibold text-[28px]  pl-5">{name}</h1>
        <div className="flex gap-3 items-center pl-8  pt-14 pb-5">
          <Status status={status} />
          <div className=" flex items-center gap-1 font-light text-sm text-[#B8BBC3]">
            <PriorityIcon size="md" /> {priority}
          </div>
        </div>
      </div>
  );
};

export default Client;
