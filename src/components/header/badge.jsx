export function Badge({ children, icon }) {
  return (
    <div className=" rounded-lg bg-[#DCDEE2] py-1 px-5 flex items-baseline">
      <div className="text-[#727377] text-xs font-medium mr-1">{children}</div>
      {icon}
    </div>
  );
}
