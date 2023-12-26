import { CardIcon } from "../../icons/CardIcon";
import { DateIcon } from "../../icons/DateIcon";
import { MailIcon } from "../../icons/MailIcon";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { PriorityIcon } from "../../icons/PriorityIcon";

const Item = () => {
  return (
    <div className="h-[73px] bg-white/80 drop-shadow-md  rounded-[12px] shrink-0 py-3 px-5 text-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Гречеслав Крупов</p>
        <p className="relative text-[#DD4C1E] before:bg-[#DD4C1E] text-sm before-item">
          Failure to reach
        </p>
      </div>
      <ul className="flex items-center gap-3 text-[#B8BBC3] text-[11px] font-normal">

        <li> <div className="flex items-center gap-1"><DateIcon/> 21.02.2023</div> </li>
        <li> <div className="flex items-center gap-1"><CardIcon/> Apple Card</div> </li>
        <li> <div className="flex items-center gap-1"><PhoneIcon/> 341-59-15</div> </li>
        <li> <div className="flex items-center gap-1"><MailIcon/> coolmail@mail.com</div> </li>
        <li> <div className="flex items-center gap-1"><PriorityIcon/> High</div> </li>

      </ul>
    </div>
  );
};

export default Item;
