const net = require("net"); //common js modules

const server = net.createServer();

server.on("connection", handleConnection);

const PORT = 5001;

// puerto, tarjeta de red, función
server.listen(PORT, "127.0.0.1", () => {
  console.log("Listening in port: " + PORT);
});

function handleConnection(socket) {
  console.log(
    `Connection from socket ${socket.remoteAddress} : ${socket.remotePort}`
  );
}
