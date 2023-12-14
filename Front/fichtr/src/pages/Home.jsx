import Post from "../component/Post/Post";
import { useState } from "react";
import Button from "../component/Button";
import ChargeContentPost from "../component/Post/ChargeContentPost";

export default function Home(props) {
  let [nb, setNb] = useState(0);

  return (
    <>
      <ChargeContentPost
        endpoint={"https://dev.enzo-salson.fr/api/getPosts"}
        nb={nb}
      >
        <Post />
      </ChargeContentPost>
      <div className="flex justify-center">
        <Button
          title={"Charger plus de posts"}
          handleButton={() => setNb((prevState) => prevState + 1)}
          theme={"primary"}
        />
      </div>
    </>
  );
}
