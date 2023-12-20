import Post from "../component/Post/Post";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PostOne from "../component/Post/PostOne";
import io from "socket.io-client";

export default function Home() {
  const [idList, setIdList] = useState([]);
  const [showOnePost, setShowOnePost] = useState(false);
  const [idOnePost, setIdOnePost] = useState(0);
  const [nb, setNb] = useState(0);
  const [more, setMore] = useState(true)

  useEffect(() => {
    function getContent() {
      axios
        .post("https://dev.enzo-salson.fr/api/getPosts", { nb: nb })
        .then((response) => {
          if (response.data.length === 0)  setMore(false)
          setIdList((prevIdList) => [...prevIdList, ...response.data]);

        })
        .catch((e) => {
          console.log("erreur : " + e);
        });
    }

    // Appel de la fonction de requête lorsque le composant est monté
    getContent();
  }, [nb]);
  return showOnePost ? (
    <PostOne id={idOnePost} setShowOnePost={setShowOnePost} />
  ) : (
    <div className="h-full overflow-scroll" id='posts'>
      {idList.map((item) => (
        <Post
          key={item}
          id={item}
          setIdOnePost={setIdOnePost}
          setShowOnePost={setShowOnePost}
        />
      ))}

      <button
        onClick={() => {
          setNb((prevState) => prevState + 1);
        }}
        className="p-8 bg-[#310046] hover:bg-[#470863] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={!more}
      >
        {more ? 'Charger plus de posts' : 'Vous êtes arrivé au bout...'}
      </button>
    </div>
  );
}
