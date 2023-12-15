import Post from "./Post";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import InputComment from "../InputComment";
import { AuthContext } from "../Provider/AuthContext";
import { useContext } from "react";
import Button from "../Button";

export default function PostOne({ id, setShowOnePost }) {
  const [allComment, setAllComment] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);
  const [nbLikes, setNbLikes] = useState(0);
  // let nbLikes = 0;

  let headers = null;
  if (isAuthenticated)
    headers = { authorization: localStorage.getItem("authorization") };

  function sumLikes(list) {
    console.log(list);
    list.forEach((item) => {
      console.log(item);
      // nbLikes += item.likes_count;
      setNbLikes((prevState) => prevState + parseInt(item.likes_count));
    });
  }
  useEffect(() => {
    axios
      .post(
        "https://dev.enzo-salson.fr/api/getComments",
        {
          post_id: id,
        },
        { headers }
      )
      .then((response) => {
        setAllComment(response.data);
        sumLikes(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("nbLikes =" + nbLikes);

  return (
    <div className="p-2">
      <Button
        title={"retour"}
        theme={"pale"}
        handleButton={() => setShowOnePost(false)}
      />

      <Post id={id} />
      {/* {mostLiked.id !== "-1" ? (
        <Comment
          //  key={mostLiked.id}
          user_id={mostLiked.user_id}
          body={mostLiked.body}
          username={mostLiked.username}
          comment_id={mostLiked.id}
          likes_count={mostLiked.likes_count}
          isLiked={mostLiked.liked}
          gradient={`${mostLiked.likes_count / nbLikes}`}
        />
      ) : (
        ""
      )} */}
      <div className="flex flex-col p-1">
        <InputComment
          id={id}
          setAllComment={setAllComment}
          allComment={allComment}
        />
        {allComment.map((item) => (
          <Comment
            key={item.id}
            user_id={item.user_id}
            body={item.body}
            username={item.username}
            comment_id={item.id}
            likes_count={item.likes_count}
            isLiked={item.liked}
            gradient={nbLikes > 0 ? parseInt(item.likes_count) / nbLikes : 0}
          />
        ))}
      </div>
    </div>
  );
}
