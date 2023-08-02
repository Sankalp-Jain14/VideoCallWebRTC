import React , { useState , useCallback ,useEffect} from "react";
import {useSocket} from "../context/SocketProvider";
const LobbyScreen = ()=>{
    const [email,setEmail] = useState("");
    const [room , setRoom] = useState("");

    const socket = useSocket();
    const handleSubmitForm = useCallback((e)=>{
        e.preventDefault(); //e.preventDefault is done so that form is not submitted automatically
        socket.emit("room:join",{email,room});
    },[email,room,socket]);

    useEffect(()=>{
        socket.on("room:join",(data)=>{
            console.log(`Data from BE${data}`);
        });
    },[socket]);
    return(
        <div>
            <h1>Lobby</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email ID</label>
                <input type="email" id = "email" value = {email} onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label htmlFor="room">Room Number</label>
                <input type="text" id="room" value = {room} onChange={(e)=>setRoom(e.target.value)} />
                <br />
                <button>Join</button>
            </form>
        </div>
    );
};


export default LobbyScreen;