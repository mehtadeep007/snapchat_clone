import React, { useState } from 'react';
import "./Chats.css";
import { Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Chats() {
    const [posts,setPosts]=useState([]);

    return (
        <div className="chats">

            <div className="chats__header">
                <Avatar className="chats__avatar"/>
                <div className="chats__search">
                    <SearchIcon />
                    <input placeholder="search.." type="text"/>
                </div>
                <ChatBubbleIcon className="chats__chatIcon"/>
            </div>

            <div className="chats__posts">
                
            </div>
        </div>
    )
}

export default Chats;
