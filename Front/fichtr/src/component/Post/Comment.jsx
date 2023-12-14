import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../User/ProfilePic";

function Comment({ user_id, body, username, comment_id, nbLikes, opacity }) {
  const { isAuthenticated } = useContext(AuthContext);
  const [likesCount, setLikesCount] = useState(nbLikes);
  const [liked, setLiked] = useState(false);

  // useEffect(() => {
  //   axios
  //     .post("https://dev.enzo-salson.fr/api/getLikesCountComment", {
  //       comment_id: comment_id,
  //     })
  //     .then((response) => {
  //       setLikesCount(response.data.num);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // const handleLike = (id) => {
  //   const headers = { authorization: localStorage.getItem("authorization") };
  //   if (!liked) {
  //     setLiked(true);
  //     setLikesCount((prevState) => prevState + 1);

  //     axios
  //       .post(
  //         "https://dev.enzo-salson.fr/api/likeComment",
  //         { comment_id: id },
  //         { headers }
  //       )
  //       .then((response) => {})
  //       .catch((e) => {
  //         console.log(e);
  //         setLiked(false);
  //         setLikesCount((prevState) => prevState - 1);
  //       });
  //   } else {
  //     setLiked(false);
  //     setLikesCount((prevState) => prevState - 1);
  //     axios
  //       .post(
  //         "https://dev.enzo-salson.fr/api/unlikeComment",
  //         { comment_id: id },
  //         { headers }
  //       )
  //       .then((response) => {})
  //       .catch((e) => {
  //         console.log(e);
  //         setLiked(true);
  //         setLikesCount((prevState) => prevState + 1);
  //       });
  //   }
  // };

  return (
    <div className="  bg-white border border-gray-200 rounded-lg  my-2 relative">
      <div className="flex">
        <div
          className={`flex items-center p-4 mr-4 bg-green-950 rounded-s-lg opacity-[${opacity}]`}
        >
          {isAuthenticated ? (
            <img
              // onClick={() => handleLike(comment_id)}
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
        <div className="mb-4">
          <div className="flex items-center p-4">
            {/* <ProfilePicture userId={user_id} /> */}
            <span className="font-bold text-gray-900">{username}</span>
          </div>
          <div className="p-2">{body}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
