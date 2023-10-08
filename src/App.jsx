import "./App.css";
import { Badge } from "./components/header/badge";
import { ArrowDown } from "./icons/arrow-down";
// import { ArrowDown } from './icons/arrow-down'
import { Search } from "./icons/search";

function App() {
  return (
    <header className="px-4 py-6 max-w-[723px] h-[785]">
      <div className="bg-[#F4F5F8] rounded-[18px] px-6 pb-5">
        <div className="pt-[22px] pb-4 flex  items-center justify-between     ">
          <div className="flex items-baseline ">
            <div className="text-[2rem] font-bold mr-3">Requests</div>
            <div className="text-[1.37rem] font-medium text- text-[#727377]">256</div>
          </div>
          <div className="relative">
            <Search className=" absolute left-[10px] top-1 translate-y-1/2" />
            <input
              placeholder="Search"
              className=" inline-block bg-[#EDEEF0] placeholder-[#727377] font-medium text-sm rounded-[10px] py-[9.5px] pl-8 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge icon={<ArrowDown />}>status</Badge>
            <Badge icon={<ArrowDown />}>product</Badge>
            <Badge icon={<ArrowDown />}>priority</Badge>
          </div>
          <Badge>default</Badge>
        </div>
      </div>
    </header>
  );
}

export default App;
