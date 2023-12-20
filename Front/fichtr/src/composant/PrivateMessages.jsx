import React, { useState } from "react";
import ProfileInterlocuteur from "../component/Mp/ProfileInterlocuteur";
import MpEnvoye from "../component/Mp/MpEnvoye";
import MpRecu from "../component/Mp/MpRecu";
import Button from "../component/Button.jsx";



function Layout({handleClick}) {
    return (
        <>
            <Button title={"Retour"} handleButton={handleClick} theme={"primary"}/>
            <div className="flex flex-row w-screen justify-between">

                <div className="z-0 top-[8rem] relative w-full overflow-hidden bg-[#fafafa]">

                    <MpEnvoye />
                    <MpRecu />
                    <MpRecu />
                    <MpRecu />


                </div>
                <div className="top-[8rem] relative bg-[#fafafa]">
                    <ProfileInterlocuteur />
                </div>
            </div>
        </>
    );
}

function ConversationList({handleClick}){
   const [conversations, setConversations] = useState([
        { id:0, username: "Jesus Christ", pfp: 1, content: "Jaaj" },
        { id:1, username: "Peintre Autrichien", pfp: 6, content: "TGhnnhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" }
    ]);

   return(
        <div className="p-10">
            {conversations.map((conversation) => (
                <div onClick={handleClick} className="flex items-start gap-2.5 p-2">
                    <div style={{ flexDirection: 'row'}} className="flex flex-col border border-gray-200 w-full leading-1.5 p-4 bg-white">
                        <img crossOrigin="anonymous" className="w-16 h-16 rounded-xl" src={"https://dev.enzo-salson.fr/api/getProfilePic?id=" + conversation.pfp} alt={conversation.username} />
                        <div style={{ flexDirection: 'column'}} className="flex items-left space-x-2 rtl:space-x-reverse">
                            <div style={{ flexDirection: 'row'}} className="px-2.5">
                                <span className="text-xl font-bold text-gray-900">{conversation.username}</span>
                                <span className="text-sm px-2.5 font-normal text-gray-500">11:46</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900">{conversation.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div> 
   ); 

}

export default function PrivateMessages(){
    
    const [toggleConversation, setToggleConversation] = useState(false);

    function handleClick(){
        setToggleConversation(!toggleConversation);
    }

    return (
        toggleConversation ? 
          <Layout handleClick={handleClick}/> : 
          <ConversationList handleClick={handleClick}/>
    );
}
