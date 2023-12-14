import { useEffect } from "react";
import { useState } from "react";

function ShoutboxSendMessage() {
    return (

        <form>
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex justify-between fixed items-center bottom-0 px-3 py-2 rounded-lg bg-gray-50">
                <textarea id="chat" rows="1" cols="1000" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
                <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
                    <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span class="sr-only">Send message</span>
                </button>
            </div>
        </form>

    );
}

function ShoutboxMessageList() {
    const MessageList = [
        { username: "Jesus Christ", pfp: "test", content: "Jaaj" },
        { username: "Peintre Autrichien", pfp: "test", content: "TGhnnhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" }
    ]

    return (
        <div>
            {MessageList.map((message, index) => (
                <div class="flex items-start gap-2.5">
                    <div class="flex flex-col w-full leading-1.5 p-4 border-gray-500 bg-gray-100 rounded-e-xl rounded-es-xl">
                        <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            <img class="w-8 h-8 rounded-full" src={message.pfp} alt={message.username} />
                            <span class="text-sm font-semibold text-gray-900">{message.username}</span>
                            <span class="text-sm font-normal text-gray-500">11:46</span>
                        </div>
                        <p class="text-sm font-normal py-2.5 text-gray-900">{message.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ShoutboxComponent() {
    return (
        <>
            <ShoutboxMessageList />
            <ShoutboxSendMessage />
        </>
    );
}