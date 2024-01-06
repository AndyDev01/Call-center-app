import { WarningIcon } from "../../icons/WarningIcon";

const Action = ({selectedItem}) => {
  return (
    <>
      <div className="flex items-center gap-2 pt-5 pb-3">
        <WarningIcon />
        <h2 className="font-bold text-xl">Action Required</h2>
      </div>
      <div className=" flex flex-col gap-1 px-[14px] py-3 bg-white/80 drop-shadow-md border border-gray-200/80 h-[63px] rounded-[12px] ">
        <p className="font-medium text-xs">{selectedItem.date}</p>
        <p className="text-[#DD9C1E] text-sm font-medium" > + Order placed for {selectedItem.card} product</p>
      </div>
    </>
  );
};

export default Action;
