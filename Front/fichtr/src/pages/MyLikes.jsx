import RightNavBar from "../component/Bar/RightNavBar";
import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";
import { useState } from "react";
import Post from "../component/Post/Post";
import ChargeContent from "../component/ChargeContent";
import Button from "../component/Button";


export default function Posts(props) {
  let [nb, setNb] = useState(0);
  return (
    <>
      <Toolbar />
      <div className="flex flex-row w-screen justify-between">
        <div className="top-[8rem] relative">
          <NavbarLeft />
        </div>

        <div className="z-0 top-[8rem] relative w-full overflow-hidden bg-[#fafafa]">
          <div className="mx-auto max-w-2xl p-4">
            <ChargeContent 
            endpoint={"https://dev.enzo-salson.fr/api/getPosts"} 
            nb={nb}
            >
            <Post />
            </ChargeContent>

            <Button
             title={"Charger plus de posts"}
             handleButton={() => setNb((prevState) => prevState + 1)}
             theme={"primary"}
            />
          </div>
        </div>

        <div className="top-[8rem] relative bg-[#fafafa]">
          <RightNavBar />
        </div>
      </div>
    </>
  );
}