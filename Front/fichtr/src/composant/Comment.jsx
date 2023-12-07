import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Comment({ user_id, body, username, comment_id, liked }) {
  const { isAuthenticated } = useContext(AuthContext);
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(liked);

  useEffect(() => {
    axios
      .post("http://enzo-salson.fr:3001/api/getLikesCountComment", {
        comment_id: comment_id,
      })
      .then((response) => {
        console.log(response.data);
        setLikesCount(response.data.num);
      });
    //     .catch((error) => console.log(error));
  }, []);
  // function handleLike(id) {
  //   if (!isLiked) {
  //     setIsLiked(true);
  //     setLikesCount((prevState) => prevState + 1);
  //   }
  //   axios
  //     .post("http://enzo-salson.fr:3001/api/likesCountComment", {
  //       comment_id: id,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setLikesCount(response.data.num);
  //     })
  //     .catch((error) => console.log(error));
  // }
  return (
    <div className="  bg-white border border-gray-200 rounded-lg p-4 my-2 relative">
      <div className="flex items-center mb-4">
        <img
          src={"http://enzo-salson.fr:3001/api/getProfilePic?id=" + user_id}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="font-bold text-gray-900">{username}</span>
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
      <h2 className="font-bold mb-2">{body}</h2>
    </div>
  );
}

export default Comment;
