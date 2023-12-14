import Post from "./Post/Post";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import InputComment from "./InputComment";
import { AuthContext } from "./Provider/AuthContext";
import { useContext } from "react";

export default function PostOne({ id }) {
  const [allComment, setAllComment] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);
  // const [liked, setLiked] = useState(false);

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
        console.log(allComment);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="p-2">
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
          />
        ))}
      </div>
    </div>
  );
}
