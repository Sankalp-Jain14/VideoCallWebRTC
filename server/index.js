const { Server } =  require("socket.io");

const io = new Server(8000,{
    cors:true,
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) =>{
    console.log(`Socket Connected`,socket.id);
    socket.on('room:join',data => {
        const {email,room} = data;
        emailToSocketIdMap.set(email,socket.id);
        socketidToEmailMap.set(socket.id,email);
        io.to(room).emit("user:joined",{email,id:socket.id});//email and socket id of second user joined
        socket.join(room);
        io.to(socket.id).emit("room:join",data);//jis user ne data send kiya usi ko emit karo room join. yeh room join wapis Lobby ke useEffect me jayega aur console.log aana chaiye 
    }); 

    socket.on('user:call',({to,offer})=>{
        io.to(to).emit('incomming:call', {from : socket.id,offer});
    });
});