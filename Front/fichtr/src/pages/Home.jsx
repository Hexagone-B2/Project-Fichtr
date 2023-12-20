import Post from "../component/Post/Post";
import { useState } from "react";

import ChargeContent from "../component/ChargeContent";
import Button from "../component/Button";

import PrivateMessages from "../composant/PrivateMessages.jsx"

export default function Home(props) {
  let [nb, setNb] = useState(0);

  return (
    <>

      <ChargeContent

        endpoint={"https://dev.enzo-salson.fr/api/getPosts"}
        nb={nb}
      >
        <Post />
      </ChargeContent>

      <PrivateMessages/>
        

      <button
        onClick={() => setNb((prevState) => prevState + 1)}
        className="p-8 bg-[#310046] hover:bg-[#470863] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Charger plus de posts
      </button>
      <Button
        title={"Charger plus de posts"}
        handleButton={() => setNb((prevState) => prevState + 1)}
        theme={"primary"}
      />

    </>
  );
}
