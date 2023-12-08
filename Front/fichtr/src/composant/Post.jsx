import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Post({ id }) {
  const [post, setPost] = useState({});
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    let headers = undefined;
    if (isAuthenticated) {
      headers = { authorization: localStorage.getItem("authorization") };
    } else {
      headers = {};
    }
    const data = { id: id };
    axios
      .post(
        "http://enzo-salson.fr:3001/api/getPostInfo",
        data,
        { headers }
      )
      .then((response) => {
        const post = {
          title: response.data.title,
          body: response.data.body,
          likes: response.data.likes,
          comments: response.data.comments,
          liked: response.data.liked,
          owner_id: response.data.owner_id,
          username: response.data.username,
        };
        setLiked(post.liked);
        setPost(post);
        setLikesCount(post.likes);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleLike = (id) => {
    const headers = { authorization: localStorage.getItem("authorization") };
    if (!liked) {
      setLiked(true);
      setLikesCount((prevState) => prevState + 1);

      axios
        .post(
          "http://enzo-salson.fr:3001/api/like",
          { post_id: id },
          { headers }
        )
        .then((response) => {})
        .catch((e) => {
          console.log(e);
          setLiked(false);
          setLikesCount((prevState) => prevState - 1);
        });
    } else {
      setLiked(false);
      setLikesCount((prevState) => prevState - 1);
      axios
        .post(
          "http://enzo-salson.fr:3001/api/unLike",
          { post_id: id },
          { headers }
        )
        .then((response) => {})
        .catch((e) => {
          console.log(e);
          setLiked(true);
          setLikesCount((prevState) => prevState + 1);
        });
    }
  };

  return (
    <div className="m-8 bg-white border border-gray-200 rounded-lg p-4 relative">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <div className="flex items-center mb-4">
        <img
          src={
            post.owner_id
              ? `http://enzo-salson.fr:3001/api/getProfilePic?id=${post.owner_id}`
              : ""
          }
          alt="avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="font-bold text-gray-900">{post.username}</span>
      </div>
      <p className="text-gray-800">{post.body}</p>
      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 flex items-center">
            {isAuthenticated ? (
              <img
                onClick={() => handleLike(id)}
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
          <span className="text-gray-500 flex items-center">
            <img src="./img/comment.svg" alt="commentaire" />
            {post.comments}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
