import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./ChatView.css"
import { selectSelectedimage } from './features/appSlice';

function ChatView() {
    const selectedImage=useSelector(selectSelectedimage);
    const history=useHistory();

    useEffect(()=>{
        if(!selectedImage){
            exit();
        }
    },[selectedImage])

    const exit=()=>{
        history.replace('/chats')
    };

    return (
        <div className="chatView">
            <img src={selectedImage} onClick={exit} alt=""/>
        </div>
    )
}

export default ChatView;
