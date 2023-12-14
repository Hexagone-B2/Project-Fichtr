import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";
import MpEnvoye from "../component/Mp/MpEnvoye";
import ProfileInterlocuteur from "../component/Mp/ProfileInterlocuteur";

export default function Layout(props) {
    return (
        <>
            <Toolbar />
            <div className="flex flex-row w-screen justify-between">
                <div className="top-[8rem] relative">
                    <NavbarLeft />
                </div>
                <div className="z-0 top-[8rem] relative w-full overflow-hidden bg-[#fafafa]">

                    <MpEnvoye>




                    </MpEnvoye>


                </div>
                <div className="top-[8rem] relative bg-[#fafafa]">
                    <ProfileInterlocuteur />
                </div>
            </div>
        </>
    );
}
