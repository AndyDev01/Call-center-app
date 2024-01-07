import { PriorityIcon } from "../../icons/PriorityIcon";
import Status from "../Status";

const Client = ({ name, status, priority }) => {
  return (
    <div className="h-[122px] px-1 pt-[19px] ">
      <h1 className="font-semibold text-[28px]  pl-5">{name}</h1>
      <div className=" h- flex gap-3 items-center pl-8  pt-[22px] ">
        <Status status={status} />
        {priority && (
          <div className=" flex items-center gap-1 font-light text-sm text-[#B8BBC3]">
            <PriorityIcon size="md" /> {priority}
          </div>
        )}
      </div>
    </div>
  );
};

export default Client;
