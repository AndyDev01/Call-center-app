import { ArrowDownIcon } from "../../icons/ArrowDownIcon";
import { SortIcon } from "../../icons/SortIcon";
import { Badge } from "../Header/Badge";

const Filters = () => {
  return (
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
  );
};

export default Filters;
