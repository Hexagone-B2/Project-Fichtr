import Post from "../composant/Post";
import Commentaire from "../composant/Commentaire";
import Layout from "../pages/Layout";
import {useEffect} from "react";
import axios from "axios";


export default function Posts(props) {
    useEffect(() => {
        axios.post("http://enzo-salson.fr:3001/api/getComments")
    }, []);

    return (


        <Layout>

                    <div className="mx-auto max-w-2xl p-8">
                        <Post id={1} />
                        <div className="flex-col p-1">
                            <Commentaire />
                            <Commentaire />

                        </div>
                    </div>

        </Layout>


    );
}
