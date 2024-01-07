import Filters from "./Filters";
import Head from "./Head";
import RequestsList from "./RequestsList";


const Requests = ({items, setSelectedItem, selectedItem }) => {
  return (
    <section className="max-w-[723px] h-[785px]  bg-[#F4F5F8] rounded-[18px] flex-grow shadow-lg drop-shadow-md">
      <div className="px-6">
        <Head items={items}/>
        <Filters/>
      </div>
      <RequestsList items={items} setSelectedItem={setSelectedItem }/>
    </section>
  );
};

export default Requests;
