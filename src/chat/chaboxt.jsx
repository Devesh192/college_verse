import './chat.css'
import React, { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./message";
import SendMessage from "./sendmessage";


const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });
        return () => unsubscribe;
    }, []);

    return (
        <div className="chat-box border-sky-700 rounded-2xl border-4 shadow-md m-4 md">
            <div className="messages-wrapper overflow-y-scroll h-[300px]">
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <span ref={scroll}></span>

            <SendMessage scroll={scroll} />
        </div>
    );
};

export default ChatBox;