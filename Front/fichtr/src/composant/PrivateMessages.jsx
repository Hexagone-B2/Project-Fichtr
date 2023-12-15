import React, { useState } from "react";

function ConversationList(){
    const [conversations, setConversations] = useState([
        { username: "Jesus Christ", pfp: 1, content: "Jaaj" },
        { username: "Peintre Autrichien", pfp: 1, content: "TGhnnhhhhhhhhhhhhhhhhhTGhnnhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" }
    ]);
    return (
        <div className="p-10">
            {conversations.map((conversation) => (
                <div className="flex items-start gap-2.5 p-2">
                    <div style={{ flexDirection: 'row'}} className="flex flex-col border border-gray-200 w-full leading-1.5 p-4 bg-white">
                        <img crossOrigin="anonymous" className="w-16 h-16 rounded-xl" src={"https://dev.enzo-salson.fr/api/getProfilePic?id=" + conversation.pfp} alt={conversation.username} />
                        <div style={{ flexDirection: 'column'}} className="flex items-left space-x-2 rtl:space-x-reverse">
                            <div style={{ flexDirection: 'row'}} className="px-2.5">
                                <span className="text-xl font-bold text-gray-900">{conversation.username}</span>
                                <span className="text-sm px-2.5 font-normal text-gray-500">11:46</span>
                            </div>
                            <p className="text-sm break-all font-normal py-2.5 text-gray-900">{conversation.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function PrivateMessages(){
    return(
        <ConversationList />
    );
}
