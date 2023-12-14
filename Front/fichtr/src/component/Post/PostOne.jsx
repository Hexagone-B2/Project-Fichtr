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

  let headers = null;
  if (isAuthenticated)
    headers = { authorization: localStorage.getItem("authorization") };

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
      })
      .catch((error) => console.log(error));
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
          />
        ))}
      </div>
    </div>
  );
}
