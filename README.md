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