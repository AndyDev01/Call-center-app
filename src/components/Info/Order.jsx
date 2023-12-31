import { CardIcon } from "../../icons/CardIcon";
import { DateIcon } from "../../icons/DateIcon";
import { HomeIcon } from "../../icons/HomeIcon";
import { MailIcon } from "../../icons/MailIcon";
import { ManufacturedIcon } from "../../icons/ManufacturedIcon";
import { PhoneIcon } from "../../icons/PhoneIcon";

const Order = () => {
  return (
    <>
      <div className="flex items-center gap-2 mt-9 mb-3">
        <DateIcon size="lg" />
        <h2 className="font-bold text-xl">Order</h2>
      </div>
      <div className="px-[14px] py-3 bg-white/80 drop-shadow-md border border-gray-100 rounded-[12px]">
        <p className="font-medium text-xs mb-2">Contacts</p>
        <div className="flex items-center gap-4 font-medium text-sm flex-wrap">
          <div className="flex items-center gap-[6px] ">
            <PhoneIcon size="md" />
            <div>341-59-15</div>
          </div>

          <div className="flex items-center gap-[6px]">
            <MailIcon size="md" />
            <div>coolmail@mail.com</div>
          </div>

          <div className="flex items-center gap-[6px]">
            <HomeIcon />
            <div >Maple st. 12/14</div>
          </div>
        </div>
        <p className="font-medium text-xs mt-4 mb-2">Product</p>
        <div className="flex items-center gap-4 font-medium text-sm flex-wrap">
          <div className="flex items-center gap-[6px]">
            <CardIcon size="md" />
            <div>Apple Card</div>
          </div>

          <div className="flex items-center gap-[6px]">
            <ManufacturedIcon />
            <div >Manufactured</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;

// w 18
// h 20
