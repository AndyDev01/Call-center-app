import {  ArrowDownIcon } from "../../icons/ArrowDownIcon";
import { SearchIcon } from "../../icons/SearchIcon";
import { SortIcon } from "../../icons/SortIcon";
import { Badge } from "../Header/badge";


const Requests = () => {
  return (
    <section className="px-4 max-w-[723px] h-[785px] bg-[#F4F5F8] rounded-[18px] flex-grow">
      <div>
        <div className="pt-[22px] pb-4 pl-[6px] flex  items-center justify-between">
          <div className="flex items-baseline ">
            <h1 className="text-[2rem] font-bold mr-3">Requests</h1>
            <div className="text-[1.37rem] font-medium text- text-[#727377]">
              256
            </div>
          </div>
          <div className="relative">
            <SearchIcon className=" absolute left-[10px] top-1 translate-y-1/2" />
            <input
              placeholder="Search"
              className=" inline-block bg-[#EDEEF0] placeholder-[#727377] font-medium text-sm rounded-[10px] py-[9.5px] pl-8 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pl-[6px]">
          <div className="flex gap-2">
            <Badge icon={<ArrowDownIcon />} iconPosition={"right"}>
              status
            </Badge>
            <Badge icon={<ArrowDownIcon />} iconPosition={"right"}>
              product
            </Badge>
            <Badge icon={<ArrowDownIcon />} iconPosition={"right"}>
              priority
            </Badge>
          </div>
          <Badge icon={<SortIcon />} iconPosition={"left"}>
            default
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Requests;
