import Action from "./Action";
import Client from "./Client";
import Order from "./Order";

const Info = ({ selectedItem }) => {
  return (
    <section className="h-[613px] max-w-[488px] bg-[#F4F5F8] rounded-[18px] flex-grow shadow-lg drop-shadow-md ">


        <Client 
          name={selectedItem && selectedItem.name}
          status={selectedItem && selectedItem.status}
          priority={selectedItem && selectedItem.priority}
        />
      
      <div className="px-4 h-[486px] rounded-b-[18px] border-t border-black mx-1 bg-white">
        {selectedItem && <Action selectedItem={selectedItem} />}
        {selectedItem && <Order selectedItem={selectedItem} />}
      </div>
    </section>
  );
};

export default Info;
