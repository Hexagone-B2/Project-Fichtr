import axios from "axios";
import { AuthContext } from "./Provider/AuthContext";
import { useContext, useState } from "react";

export default function InputComment({ id, setAllComment, allComment }) {
  const { userId, userName } = useContext(AuthContext);

  function handleResponse(event) {
    const headers = { authorization: localStorage.getItem("authorization") };

    axios
      .post(
        "https://dev.enzo-salson.fr/api/comment",
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
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  return (
    <form onSubmit={handleResponse}>
      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label for="comment" class="sr-only">
            Votre commentaire
          </label>
          <textarea
            id="comment"
            rows="4"
            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#310046] rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-[#460044]"
          >
            Répondre
          </button>
        </div>
      </div>
    </form>
  );
}
