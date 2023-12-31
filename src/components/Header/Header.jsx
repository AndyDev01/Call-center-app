import { GitHubIcon } from "../../icons/GitHubIcon";

const Header = () => {
    return (
      <header className="relative flex items-center justify-between w-100% bg-[#F4F5F8] h-20 shadow-md px-8 z-10">
        <h1 className="font text-[2rem] font-bold">
          Call-center app
        </h1>
        <div>
          <a href="https://github.com/AndyDev01/Call-center-app" target="blank"><GitHubIcon/></a>
        </div>
      </header>
    )
  
  };
  
  export default Header;