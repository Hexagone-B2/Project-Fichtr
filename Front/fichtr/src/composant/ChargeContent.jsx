import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChargeContent({ endpoint, nb, children }) {
  const [idList, setIdList] = useState([]);

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
      {idList.map((item) =>
        // Créer dynamiquement des composants enfants en fonction des éléments de la liste
        React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            id: item,
          });
        })
      )}
    </div>
  );
}
