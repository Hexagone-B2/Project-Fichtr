import axios from "axios";
import Post from "../composant/Post";
import { useEffect, useState } from "react";

export default function Home(props) {
  let [idList, setIdList] = useState(["1", "2"]);
  let [nb, setNb] = useState(10);

  function getLastPosts() {
    console.log(nb);
    axios
      .post("http://enzo-salson.fr:3001/api/getPostId", { nb: nb })
      .then((response) => {
        setIdList(response.data.idList);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getLastPosts();
  }, [nb]);
  return (
    <>
      {idList.map((element) => (element !== "" ? <Post id={element} /> : null))}
      <button
        className="p-8 bg-[#310046] hover:bg-[#470863] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => setNb((prevState) => prevState * 2)}
      >
        Charger plus de posts
      </button>
    </>
  );
}
