import RightNavBar from "../component/Bar/RightNavBar";
import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";

export default function Layout(props) {
  return (
    <>
      <Toolbar />
      <div className="flex flex-row w-screen justify-between">
        <div className="top-[8rem] relative">
          <NavbarLeft />
        </div>
        <div className="z-0 top-[8rem] relative w-full overflow-hidden bg-[#fafafa]">
          {props.children}
        </div>
        <div className="top-[8rem] relative bg-[#fafafa]">
          <RightNavBar />
        </div>
      </div>
    </>
  );
}
