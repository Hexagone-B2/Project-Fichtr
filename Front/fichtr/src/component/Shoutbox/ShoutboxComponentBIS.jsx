import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { AuthContext } from "../Provider/AuthContext";
import {Link} from "react-router-dom";
import ProfilePicture from "../User/ProfilePic";

const socket = io.connect("https://dev.enzo-salson.fr");
const scrollBottom = ()=>{
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
}

function ShoutboxSendMessage({messageList, setMessageList}) {
    const [message, setMessage] = useState("");
    const { isAuthenticated, userId, userName } = useContext(AuthContext);

    function handleClick(e){
        e.preventDefault();
        if (isAuthenticated) {
            socket.emit("shoutbox_message_send", {authorization: localStorage.getItem("authorization"), message: message});
            setMessageList([...messageList, { username: userName, pfp: userId, content: message, sended:true }]);
            scrollBottom()
        }

    }

    return (

        <form className="absolute w-full bottom-0">
            <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex justify-between items-center bottom-0 px-3 py-2 rounded-lg bg-gray-50">
                <textarea id="chat" onChange={(e) => setMessage(e.target.value)} rows="1" className="w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-[50px]" placeholder="Your message..."></textarea>
                <button type="submit" onClick={handleClick} className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
                    <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span className="sr-only">Send message</span>
                </button>
            </div>
        </form>

    );
}

function ShoutboxMessageList({messageList, setMessageList}) {
    useEffect(() => {
        socket.on("shoutbox_message_receive", (data) => {
            console.log('receive')
            setMessageList([...messageList, { username: data.sender, pfp: data.sender_id, content: data.message, sended:false }]);
            scrollBottom();
        });
    },[]);

    return (
        <div className={'pb-10'}>
            {messageList.map((message) => (
                <div className="flex items-start gap-2.5 p-4" key={Math.random()}>
                    <div className="flex flex-col justify-end w-full leading-1.5 p-4 border-gray-500 bg-gray-100 rounded-e-xl rounded-es-xl">
                        <div className={message.sended ? "flex space-x-2 justify-end rtl:space-x-reverse" : "flex space-x-2 rtl:space-x-reverse"}>
                            <ProfilePicture size={"small"} userId={message.pfp || null} />
                            <span className="text-sm font-semibold text-gray-900">{message.username}</span>
                        </div>
                        <div className={message.sended ? "flex justify-end" : null}>
                            <p className={"text-sm ju font-normal py-2.5 text-gray-900 pl-10 pr-10"}>{message.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ShoutboxComponentBIS() {
    const [messageList, setMessageList] = useState([]);
    const { isAuthenticated, authUser } = useContext(AuthContext);
    console.log(messageList)
    useEffect(() => {
        setMessageList(messageList)
    }, [isAuthenticated]);

    return (
        <section className="h-full">
            <ShoutboxMessageList messageList={messageList} setMessageList={setMessageList}/>
            {isAuthenticated ?
                <ShoutboxSendMessage messageList={messageList} setMessageList={setMessageList}/>
                :
                    <div className="flex justify-between fixed items-center text-center items-center bottom-0 px-3 py-2 rounded-lg bg-gray-100">
                        <h1
                                  className="block w-[1500px] text-2xl text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-[50px]"
                                  disabled={true}>Veuillez vous connecter pour envoyer un message</h1>
                    </div>
            }
        </section>
    );
}
