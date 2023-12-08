import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Comment({ user_id, body, username, comment_id }) {
  const { isAuthenticated } = useContext(AuthContext);
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    axios
      .post("http://enzo-salson.fr:3001/api/getLikesCountComment", {
        comment_id: comment_id,
      })
      .then((response) => {
        setLikesCount(response.data.num);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="  bg-white border border-gray-200 rounded-lg  my-2 relative">
      <div className="flex">
        <div className="flex items-center p-4 mr-4 bg-green-100 rounded-s-lg">
          {isAuthenticated ? (
            <img
              // onClick={() => handleLike(comment_id)}
              src={isLiked ? "./img/heart-solid.svg" : "./img/heart.svg"}
              alt="like"
            />
          ) : (
            <Link to={"/login"}>
              <img src={"./img/heart.svg"} alt="like" />
            </Link>
          )}
          {likesCount}
        </div>
        <div className="mb-4">
          <div className="flex items-center p-4">
            <img
              src={"http://enzo-salson.fr:3001/api/getProfilePic?id=" + user_id}
              alt="avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
            <span className="font-bold text-gray-900">{username}</span>
          </div>
          <div className="p-2">{body}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
