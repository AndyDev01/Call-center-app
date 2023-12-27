import { WarningIcon } from "../../icons/WarningIcon";

const Action = () => {
  return (
    <>
      <div className="flex items-center gap-2 pt-5 pb-3">
        <WarningIcon />
        <h2 className="font-bold text-xl">Action Required</h2>
      </div>
      <div className=" flex flex-col gap-1 px-[14px] py-3 bg-white/80 drop-shadow-md border border-gray-100 h-[63px] rounded-[12px] ">
        <p className="font-medium text-xs">Feb 21 2023</p>
        <p className="text-[#DD9C1E] text-sm font-medium" > + Order placed for Apple Card product</p>
      </div>
    </>
  );
};

export default Action;
