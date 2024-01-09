import Tag from "../Tag";
import {useEffect, useState} from "react";
import axios from "axios";

function RightNavBar() {
  const [stats, setStats] = useState({total_posts:0,total_users : 0,last_user:"",tendance:[null,null,null]});
  useEffect(() => {
    axios.post('https://dev.enzo-salson.fr/api/getStats').then(response=>{
      setStats(response.data)
    })
  }, []);

  return (
    <div className="flex justify-end items-start sticky top-40 m-2">
      <ul className="w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        <li className="w-full px-6 py-6 border-b border-gray-200 rounded-t-lg ">
          <div className="flex items-center pb-2">
            <img src={"/img/star.svg"} alt="étoile" className="w-5 h-5 mr-2" />
            Tendances
          </div>
          <hr/>
          <div className="flex flex-col flex-wrap pb-5 pt-2">
            {stats.tendance.map(e=>(
              <Tag title={e} key={Math.random()}/>
          ))}
          </div>
          <div className="flex items-center">
            <img
              src={"/img/database.svg"}
              alt="data"
              className="w-5 h-5 mr-2"
            />
            Statistiques
          </div>
          <br />
          <hr />
          <br />

          <p>Posts : {stats.total_posts}</p>
          <p>Membres : {stats.total_users}</p>
          <p>Dernier Membre : {stats.last_user}</p>
        </li>
      </ul>
    </div>
  );
}

export default RightNavBar;
