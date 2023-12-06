import axios from "axios";
import Post from "../composant/Post";
import { useEffect, useState } from "react";
import ChargeContent from "../composant/ChargeContent";

export default function Home(props) {
  let [nb, setNb] = useState(10);

  return (
    <>
      <ChargeContent
        endpoint={"http://enzo-salson.fr:3001/api/getPostId"}
        nb={nb}
      >
        <Post />
      </ChargeContent>

      <button
        onClick={() => setNb((prevState) => prevState * 2)}
        className="p-8 bg-[#310046] hover:bg-[#470863] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Charger plus de posts
      </button>
    </>
  );
}
