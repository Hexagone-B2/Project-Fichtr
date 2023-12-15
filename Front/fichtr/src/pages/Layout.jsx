import RightNavBar from "../component/Bar/RightNavBar";
import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";

export default function Layout(props) {
    return (
        <div>
            <Toolbar/>
            <div className="mt-[7.5rem] grid grid-cols-4 gap-2 bg-[#fafafa]">
                <NavbarLeft/>
                <div className="col-span-2 max-h-[88vh] bg-[#fafafa]">
                    {props.children}
                </div>
                <RightNavBar/>
            </div>
        </div>
    );
}
