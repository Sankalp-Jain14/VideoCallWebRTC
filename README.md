# VideoCallWebRTC
client => Created a react app named client for frontend
server => To handle backend 

installed socket.io in server folder
installed react-router-dom and socket.io-client in client folder




using the email id and roll number we will connect with the socket 

SOckets enables communication between different processes
Sockets provides a mechanism for processes to establish connections , send data , and recieve data in from both the computer

WebRTC - It is used to share files without any server

How WebRTC works?
one browser gets connected with other browsers through UDP (user datagram protocol).In UDP the connection is established but the data transfer can lag. So highly recomemded in VIdeo call app. 
No server is Required

We require public IP address of other machine to connect with it.But our same machine do not have its own IP Public address So how can we get public IP address of our machine so that it can transfer to other machine and a connection for video call is established

For this we have TURN / ICE server  
In this computer makes a request to these server and in response they get public IP

Now we have IP address of both computers but we want to connect them. SO how it is done?
It is done through sharing session description(SDP) of one computer woth another
When the transfer of SDP is done then we can share files , chat and establish Video call in an app.


const handleSubmitForm = useCallback((e)=>{
        e.preventDefault(); //e.preventDefault is done so that form is not submitted automatically
        console.log({email,room})
    },[email,room]);

useCallback is a hook that returns a memoized version of the function passed to it. Memoization is a technique to optimize performance by remembering the outpt of functions based on input arguments. The function will be recreated if any of the dependencies([email,room]) have changed



Starting of VideoCall app 
We have created 2 folders(client and server). In client folder we initailzed a react app and in server folder we have installed node and socket.io

We will start index.js as by creating a socket Server from "socket.io" 
const {Server} = require("socket.io");
const io = new Server(8000)

This is basic thing we will do in backend


Now the the screen for frontend (room,Looby) will be made
The User in the Looby will be asked email id and in which room he wants to enter

We will handle the email and room number of user and take this data in the backend using socket servers

To use sockets we will make a new context. The provider will give the access of sockets to the whole application as we have wraped our <SocketProvider> <App> </SocketProvider>

import React , {createContext,useContext,useMemo}  from "react";
import { io } from "socket.io-client";
const SocketContext = createContext(null);

export const useSocket = () =>{
    const socket = useContext(SocketContext);
    return socket;
};

export const SocketProvider = (props)=>{
    const socket = useMemo(()=>io('localhost:8000'),[]);
    return(
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
}


'SocketContext' is a 'Context' created using React createContexr function

useSocket is a custom hook created to use Web socket anywhere in the application It uses the useContext hook to retrieve the socket from the SocketContext.

The SocketProvider initializes a webSocket instance using 'io' function from the 'socket.io-client' library and makes it avialable via the 'SocketContext'
The useMemo hook is used to ensure that the socket is created only once preventing unnecessary re-creations

