import { CardIcon } from "../../icons/CardIcon";
import { DateIcon } from "../../icons/DateIcon";
import { MailIcon } from "../../icons/MailIcon";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { PriorityIcon } from "../../icons/PriorityIcon";
import Status from "../Status";

const Item = () => {
  return (
    <div className="h-[73px] bg-white/80 drop-shadow-md  border border-gray-100 rounded-[12px] shrink-0 py-3 px-5 text-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Гречеслав Крупов</p>
        <Status/>
      </div>
      <ul className="flex items-center gap-3 text-[#B8BBC3]  text-[11px] font-normal">

        <li> <div className="flex items-center gap-1"><DateIcon size={'sm'}/> 21.02.2023</div> </li>
        <li> <div className="flex items-center gap-1"><CardIcon size={'sm'}/> Apple Card</div> </li>
        <li> <div className="flex items-center gap-1"><PhoneIcon/> 341-59-15</div> </li>
        <li> <div className="flex items-center gap-1"><MailIcon/> coolmail@mail.com</div> </li>
        <li> <div className="flex items-center gap-1"><PriorityIcon/> High</div> </li>

      </ul>
    </div>
  );
};

export default Item;
