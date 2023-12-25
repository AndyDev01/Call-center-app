import Info from "../../components/Info/Info";
import Requests from "../../components/Requests/Requests";


const Main = () => {
  return (
    <main className="flex justify-center flex-grow gap-3 mt-5">
      <Requests />
      <Info/>
    </main>
  );
};

export default Main;