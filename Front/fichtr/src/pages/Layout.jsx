import RightNavBar from "../composant/RightNavBar";
import NavbarLeft from "../composant/LeftNavbar";
import Toolbar from "../composant/Toolbar";

export default function Layout(props) {
  return (
    <>
      <Toolbar />
      <div className="flex flex-row w-screen justify-between">
        <div className="top-[8rem] relative">
          <NavbarLeft />
        </div>
        <div className="z-0 top-[8rem] bg-gray-100 relative h-screen w-full overflow-hidden">
          {props.children}
        </div>
        <div className="top-[8rem] relative">
          <RightNavBar />
        </div>
      </div>
    </>
  );
}
