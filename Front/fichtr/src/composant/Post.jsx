import React, {useEffect, useState} from 'react';
import axios from "axios";

function Post({id, username, imagelink}) {
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.post("http://enzo-salson.fr:3001/api/getPostInfo", {id: id}).then(response => {
            const post = {
                title: response.data.title,
                body: response.data.body,
                likes: response.data.likes,
                comments: response.data.comments
            }
            setPost(post);
        })
    }, []);
    return (

        <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg p-4 my-8 relative">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <div className="flex items-center mb-4">
                <img src={imagelink} alt="avatar" className="w-10 h-10 rounded-full mr-4"/>
                <span className="font-bold text-gray-900">{username}</span>
            </div>
            <p className="text-gray-800">{post.body}</p>
            <div className="flex justify-between mt-4">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500 flex items-center"><img src="./img/heart.svg" alt="like"/> {post.likes}</span>
                    <span className="text-gray-500 flex items-center"><img src="./img/comment.svg" alt="commentaire"/>{post.comments}</span>
                </div>

            </div>
        </div>

    );
}

export default Post;
