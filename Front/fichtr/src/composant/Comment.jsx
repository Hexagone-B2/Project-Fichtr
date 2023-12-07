import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Comment({ user_id, body, username, comment_id }) {
  const { isAuthenticated } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  function handleLike(id) {
    const headers = { authorization: localStorage.getItem("authorization") };

    axios
      .post(
        "http://enzo-salson.fr:3001/api/comment",
        { comment_id: id },
        { headers }
      )
      .then((response) => {
        setLiked(response.data.liked);
        setLikesCount(response.data.likes);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-lg p-4 my-8 relative">
      <h2 className="text-xl font-bold mb-2">{body}</h2>
      <div className="flex items-center mb-4">
        <img
          src={"http://enzo-salson.fr:3001/api/getProfilePic?id=" + user_id}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="font-bold text-gray-900">{username}</span>
        {isAuthenticated ? (
          <img
            onClick={() => handleLike(comment_id)}
            src={liked ? "./img/heart-solid.svg" : "./img/heart.svg"}
            alt="like"
          />
        ) : (
          <Link to={"/login"}>
            <img src={"./img/heart.svg"} alt="like" />
          </Link>
        )}
        {likesCount}
      </div>
    </div>
  );
}

export default Comment;
