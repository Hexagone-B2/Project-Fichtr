import RightNavBar from "../composant/RightNavBar";
import NavbarLeft from "../composant/LeftNavbar";
import Toolbar from "../composant/Toolbar";
import Post from "../composant/Post";
import Commentaire from "../composant/Commentaire";

export default function Posts(props) {
    return (
        <>
            <Toolbar />
            <div className="flex flex-row w-screen justify-between">
                <div className="top-[8rem] relative">
                    <NavbarLeft />
                </div>

                <div className="z-0 top-[8rem] relative w-full overflow-hidden bg-[#fafafa]">
                    <div className="mx-auto max-w-2xl p-8">
                        <Post />
                        <div className="flex-col p-1">
                            <Commentaire />
                            <Commentaire />

                        </div>
                    </div>
                </div>

                <div className="top-[8rem] relative bg-[#fafafa]">
                    <RightNavBar />
                </div>
            </div>
        </>
    );
}
