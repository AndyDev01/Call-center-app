export function Badge({ children, icon, iconPosition }) {
  return (
    <div className=" rounded-lg bg-[#DCDEE2] py-1 px-4 flex items-baseline cursor-pointer">
      {iconPosition === "left" ? icon : null}
      <div className="text-[#727377] text-xs font-medium mx-1">{children}</div>
      {iconPosition === "right" ? icon : null}
    </div>
  );
}
