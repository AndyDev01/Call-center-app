import { useEffect, useState } from "react";
import Info from "../../components/Info/Info";
import Requests from "../../components/Requests/Requests";

const Main = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    const getUsers = () => {
      fetch("https://658ca976859b3491d3f646f6.mockapi.io/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => setItems(data));
    };
      getUsers();
  },[])
  // console.log(items)


  return (
    <main className="flex justify-center flex-grow gap-3 pt-5 pb-10 main-h">
      <Requests items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      <Info selectedItem={selectedItem}/>
    </main>
  );
};

export default Main;
