import Post from "../component/Post/Post";
import { useState } from "react";
import ChargeContent from "../component/ChargeContent";
import Button from "../component/Button";

export default function Home(props) {
  let [nb, setNb] = useState(0);

  return (
    <>
      <ChargeContent
        endpoint={"https://dev.enzo-salson.fr/api/getPosts"}
        nb={nb}
      >
        <Post />
      </ChargeContent>

      <Button
        title={"Charger plus de posts"}
        handleButton={() => setNb((prevState) => prevState + 1)}
        theme={"primary"}
      />
    </>
  );
}
