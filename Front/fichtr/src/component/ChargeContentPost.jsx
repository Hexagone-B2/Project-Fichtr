import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function ChargeContentPost({ endpoint, nb, children }) {
  const [idList, setIdList] = useState([]);
  const [showOnePost, setShowOnePost] = useState(false);

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

  return (
    <div>
      {idList.map((item) => (
        // Créer dynamiquement des composants enfants en fonction des éléments de la liste
        <Post key={item} id={item} />
      ))}
    </div>
  );
}
