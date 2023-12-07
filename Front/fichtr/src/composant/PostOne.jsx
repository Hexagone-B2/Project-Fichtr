import Post from "./Post";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import InputComment from "./InputComment";

export default function PostOne({ id }) {
  const [allComment, setAllComment] = useState([]);
  useEffect(() => {
    axios
      .post("http://enzo-salson.fr:3001/api/getComments", {
        post_id: id,
      })
      .then((response) => {
        setAllComment(response.data.comments);
      });
  }, []);
  console.log(allComment);
  return (
    <div className="mx-auto max-w-2xl p-8">
      <Post id={id} />
      <div className="flex flex-col p-1">
        <InputComment
          id={id}
          setAllComment={setAllComment}
          allComment={allComment}
        />
        {allComment.map((item) => (
          <Comment
            user_id={item.user_id}
            body={item.body}
            username={item.username}
            comment_id={item.it}
          />
        ))}
      </div>
    </div>
  );
}
