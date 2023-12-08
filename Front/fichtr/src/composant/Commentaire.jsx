import React, { useEffect, useState } from "react";
import axios from "axios";

function Commentaire({ user_id, body, username }) {
  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-lg p-4 my-8 relative">
      <h2 className="text-xl font-bold mb-2">{Commentaire.body}</h2>
      <div className="flex items-center mb-4">
        <img
          src={
            "http://enzo-salson.fr:3001/api/getProfilePic?id=" +
            Commentaire.user_id
          }
          alt="avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="font-bold text-gray-900">{Commentaire.username}</span>
      </div>

      {/*<div className="flex justify-between mt-4">
                <div className="flex items-center space-x-2">
          <span className="text-gray-500 flex items-center">
            {isConnected ? (
                <img
                    onClick={() => handleLike(Commentaire.id)}
                    src={liked ? "./img/heart-solid.svg" : "./img/heart.svg"}
                    alt="like"
                />
            ) : (
                <Link to={"/login"}>
                    <img src={"./img/heart.svg"} alt="like" />
                </Link>
            )}
              {likesCount}
          </span>

                </div>
            </div>*/}
    </div>
  );
}

export default Commentaire;
