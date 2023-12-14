import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostOne from "./PostOne";

export default function ChargeContentPost({ endpoint, nb }) {
  const [idList, setIdList] = useState([]);
  const [showOnePost, setShowOnePost] = useState(false);
  const [idOnePost, setIdOnePost] = useState(0);

  useEffect(() => {
    function getContent() {
      axios
        .post(endpoint, { nb: nb })
        .then((response) => {
          setIdList((prevIdList) => [...prevIdList, ...response.data.tab]);
        })
        .catch((e) => {
          console.log("erreur : " + e);
        });
    }

    // Appel de la fonction de requête lorsque le composant est monté
    getContent();
  }, [endpoint, nb]);

  return showOnePost ? (
    <PostOne id={idOnePost} setShowOnePost={setShowOnePost} />
  ) : (
    <div>
      {idList.map((item) => (
        <Post
          key={item}
          id={item}
          setIdOnePost={setIdOnePost}
          setShowOnePost={setShowOnePost}
        />
      ))}
    </div>
  );
}
