import RightNavBar from "../component/Bar/RightNavBar";
import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";
import Post from "../component/Post/Post";
import Commentaire from "../component/Post/Commentaire";

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
            <Post id={1} />
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
