import Post from "../composant/Post";
import { useState } from "react";
import ChargeContentPost from "../composant/ChargeContentPost";

export default function Home(props) {
  let [nb, setNb] = useState(0);

  return (
    <>
      <ChargeContentPost
        endpoint={"http://enzo-salson.fr:3001/api/getPosts"}
        nb={nb}
      ></ChargeContentPost>

      <button
        onClick={() => setNb((prevState) => prevState + 1)}
        className="p-8 bg-[#310046] hover:bg-[#470863] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Charger plus de posts
      </button>
    </>
  );
}
