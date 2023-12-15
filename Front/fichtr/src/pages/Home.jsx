import Post from "../component/Post/Post";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PostOne from "../component/Post/PostOne";

export default function Home() {
  const [idList, setIdList] = useState([]);
  const [showOnePost, setShowOnePost] = useState(false);
  const [idOnePost, setIdOnePost] = useState(0);
  const [nb, setNb] = useState(0);

  useEffect(() => {
    function getContent() {
      axios
        .post("https://dev.enzo-salson.fr/api/getPosts", { nb: nb })
        .then((response) => {
          setIdList((prevIdList) => [...prevIdList, ...response.data.tab]);
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
    <div>
      {idList.map((item) => (
        // Créer dynamiquement des composants enfants en fonction des éléments de la liste
        <Post
          key={item}
          id={item}
          setIdOnePost={setIdOnePost}
          setShowOnePost={setShowOnePost}
        />
      ))}
      <button
        onClick={() => setNb((prevState) => prevState + 1)}
        className="p-8 bg-[#310046] hover:bg-[#470863] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Charger plus de posts
      </button>
    </div>
  );
}
