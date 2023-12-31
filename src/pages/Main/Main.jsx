import Info from "../../components/Info/Info";
import Requests from "../../components/Requests/Requests";


const Main = () => {
  return (
    <main className="flex justify-center flex-grow gap-3 pt-5 pb-10 main-h">
      <Requests />
      <Info/>
    </main>
  );
};

export default Main;