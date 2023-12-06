import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChargeContent({ endpoint, nb, children }) {
  let [idList, setIdList] = useState([""]);

  useEffect(() => {
    console.log(endpoint);
    // Fonction pour effectuer la requête à l'endpoint
    function getContent() {
      console.log(nb);
      axios
        .post(endpoint, { nb: nb })
        .then((response) => {
          setIdList(response.data.idList);
        })
        .catch((e) => console.log(e));
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
