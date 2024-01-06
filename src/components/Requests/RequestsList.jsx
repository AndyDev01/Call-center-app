import Item from "./Item";

const RequestsList = ({ items, setSelectedItem }) => {
  return (
    <section className=" flex flex-col gap-2 bg-white  h-[658px] mx-1 mt-4 rounded-b-[18px] border-t border-black px-5 pt-4 overflow-auto scrollbar-hide">
      { items && items.length > 0 &&  items.map((item) => {
        return (
          <Item
            onClick={() => setSelectedItem(item)}
            key={item.id}
            name={item.name}
            date={item.date}
            card={item.card}
            phone={item.phone}
            priority={item.priority}
            status={item.status}
          />
        );
      })}
    </section>
  );
};

export default RequestsList;
