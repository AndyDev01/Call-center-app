import { useEffect, useRef, useState } from "react";

export function Badge({ children, icon, iconPosition, filterMenuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-lg bg-[#DCDEE2] py-1 px-4 flex items-baseline border ${
          isOpen ? "bg-[#DCDEE2]/40 border border-[#DCDEE2]" : ""
        }`}
      >
        {iconPosition === "left" ? icon : null}
        <div className="text-[#727377] text-xs font-medium mx-1">
          {children}
        </div>
        {iconPosition === "right" ? icon : null}
      </button>

      {isOpen && (
        <div className="flex absolute  mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {filterMenuItems.map((item, index) => {
              return (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  key={index}
                  className="min-w-full text-start px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
