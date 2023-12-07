import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function InputComment({ id, setAllComment, allComment }) {
  const { userId, userName } = useContext(AuthContext);

  function handleResponse(event) {
    const headers = { authorization: localStorage.getItem("authorization") };
    console.log(event.target[0]);
    axios
      .post(
        "http://enzo-salson.fr:3001/api/comment",
        { post_id: id, body: event.target[0].value },
        { headers }
      )
      .then((response) => {
        setAllComment(
          allComment.concat({
            id: response.data.comment_id,
            user_id: userId,
            body: event.target[0].value,
            timestamp: response.data.time,
            username: userName,
          })
        );
      })
      .catch((error) => console.log(error));
    event.preventDefault();
  }

  return (
    <form onSubmit={handleResponse}>
      <textarea></textarea>
      <button type="submit">Répondre</button>
    </form>
  );
}
