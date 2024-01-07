import { CardIcon } from "../../icons/CardIcon";
import { DateIcon } from "../../icons/DateIcon";
import { MailIcon } from "../../icons/MailIcon";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { PriorityIcon } from "../../icons/PriorityIcon";
import Status from "../Status";

const Item = ({ onClick, name, date, card, phone, priority, status, email}) => {
  return (
    <div onClick={onClick} className="h-[73px] bg-white/80 drop-shadow-lg  border border-gray-200/80 rounded-[12px] shrink-0 py-3 px-5 text-lg cursor-pointer ">
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">{name}</p>
        <Status status={status} />
      </div>
      <ul className="flex items-center  text-[#B8BBC3]  text-[11px] font-normal gap-2">
        <li>
          <div className="flex items-center gap-1 pr-2">
            <DateIcon size="sm" /> {date}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-1">
            <CardIcon size="sm" /> {card}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-1">
            <PhoneIcon /> {phone}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-1">
            <MailIcon /> {email}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-1">
            <PriorityIcon size="sm" /> {priority}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Item;
