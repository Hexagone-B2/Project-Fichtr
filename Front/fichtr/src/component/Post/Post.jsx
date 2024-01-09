import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import ProfilePicture from "../User/ProfilePic";
import Tags from "../Tags";
import Loading from "../Loading";

function Post({ id, setIdOnePost, setShowOnePost }) {
  const [post, setPost] = useState({});
  const { isAuthenticated } = useContext(AuthContext);
  const [clickable, setClickable] = useState(true);
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!setIdOnePost) setClickable(false);
    let headers = undefined;
    if (isAuthenticated) {
      headers = { authorization: localStorage.getItem("authorization") };
    } else {
      headers = {};
    }
    axios.post("https://dev.enzo-salson.fr/api/getPostInfo", { id: id }, { headers })
        .then((response) => {
          setPost({
              title: response.data.title,
              body: response.data.body,
              likes: response.data.likes,
              comments: response.data.comments,
              liked: response.data.liked,
              owner_id: response.data.owner_id,
              username: response.data.username,
              tags: response.data.tags,
          });
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
  },[]);

  const handleComments = (e) => {
    if (clickable) {
      setIdOnePost(e.target.id);
      setShowOnePost(true);
    }
  };

  const handleLike = () => {
    const headers = { authorization: localStorage.getItem("authorization") };
    if (!post.liked) {
      setPost(prevState => ({ ...prevState, liked : true }));
      setPost(prevState => ({ ...prevState, likes: prevState.likes + 1 }));
      axios
          .post(
              "https://dev.enzo-salson.fr/api/like",
              { post_id: id },
              { headers }
          )
          .then(() => {})
          .catch((e) => {
            setPost(prevState => ({ ...prevState, liked: false }));
            setPost(prevState => ({ ...prevState, likes: prevState.likes - 1 }));
          });
    } else {
      setPost(prevState => ({ ...prevState, liked: false }));
      setPost(prevState => ({ ...prevState, likes: prevState.likes - 1 }));
      axios
          .post(
              "https://dev.enzo-salson.fr/api/unLike",
              { post_id: id },
              { headers }
          )
          .then((response) => {})
          .catch((e) => {
            setPost(prevState => ({ ...prevState, liked: true }));
            setPost(prevState => ({ ...prevState, likes: prevState.likes + 1 }));
          });
    }
  };
  if (!isLoading){
      return (
          <div className="mb-4 mt-4 bg-white border border-gray-200 rounded-lg p-4 relative">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <div className="flex items-center mb-4">
                  <ProfilePicture size={"small"} userId={post.owner_id || null} />
                  <span className="font-bold text-gray-900">{post.username}</span>
              </div>
              <p className="text-gray-800">{post.body}</p>
              <div className="flex justify-between mt-4">
                  <div className="flex items-center space-x-2">
          <span className="text-gray-500 flex items-center">
            {isAuthenticated ? (
                <img
                    onClick={handleLike}
                    src={post.liked ? "./img/heart-solid.svg" : "./img/heart.svg"}
                    alt="like"
                />
            ) : (
                <Link to={"/login"}>
                    <img src={"./img/heart.svg"} alt="like" />
                </Link>
            )}
              {post.likes}
          </span>
          <span className="text-gray-500 flex items-center">
            <button onClick={handleComments}>
              <img src="./img/comment.svg" alt="commentaire" id={id} />
            </button>
            {post.comments}
          </span>
                  </div>
                  <Tags tagNames={post.tags} />
              </div>
          </div>
      );
  }else{
      return (
          <div className="m-8 bg-white border border-gray-200 rounded-lg p-4 relative">
          <Loading/>
          </div>
      )
  }

}

export default Post;