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
  const [mostLiked, setMostLiked] = useState(0);

  let headers = null;
  if (isAuthenticated)
    headers = { authorization: localStorage.getItem("authorization") };

  const sumLikes = (item) => {
    if (item.likes > mostLiked) setMostLiked(item.likes);
    setNbLikes(nbLikes + item.likes);
  };
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
        setAllComment(response.data.comments);
        console.log(response.data.comments);
        sumLikes(allComment);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-2">
      <Button
        title={"retour"}
        theme={"pale"}
        handleButton={() => setShowOnePost(false)}
      />

      <Post id={id} />
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
            nbLikes={0}
            opacity={(item.likes * 100) / nbLikes}
          />
        ))}
      </div>
    </div>
  );
}
