import { SearchIcon } from "../../icons/SearchIcon";

const Head = () => {
  return (
    <div className="pt-[18px] pb-4 pl-[6px] flex  items-center justify-between ">
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
  );
};

export default Head