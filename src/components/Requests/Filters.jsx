import { ArrowDownIcon } from "../../icons/ArrowDownIcon";
import { SortIcon } from "../../icons/SortIcon";
import { Badge } from "./Badge";

const Filters = () => {

  const filterMenuItems = {
    status: [
      "Оставлена заявка",
      "Назначена встреча",
      "Карта изготовлена",
      "Нет связи",
      "В архиве",
    ],
    product: ["Apple Card", "Tinkoff Black", "Кредитная Карта", "СберКарта"],
    priority: ["High", "Medium", "Low"],
    sorting: ["default", "status", "product", "priority"],
  };

  return (
    <div className="flex items-center justify-between pl-[6px]">
      <div className="flex gap-2">
        <Badge icon={<ArrowDownIcon />} iconPosition={"right"} filterMenuItems={filterMenuItems.status}>
          status
        </Badge>
        <Badge icon={<ArrowDownIcon />} iconPosition={"right"} filterMenuItems={filterMenuItems.product}>
          product
        </Badge>
        <Badge icon={<ArrowDownIcon />} iconPosition={"right"} filterMenuItems={filterMenuItems.priority}>
          priority
        </Badge>
      </div>
      <Badge icon={<SortIcon />} iconPosition={"left"} filterMenuItems={filterMenuItems.sorting}>
        default
      </Badge>
    </div>
  );
};

export default Filters;
