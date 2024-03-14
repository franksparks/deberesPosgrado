const net = require("net"); //common js modules

let clients = [];

const server = net.createServer();

server.on("connection", handleConnection);

const PORT = 5001;

// puerto, tarjeta de red, función
server.listen(PORT, "0.0.0.0", () => {
  console.log("Listening in port: " + PORT);
});

function handleConnection(socket) {
  // Mandamos el mensaje a todos excepto al que envía el mensaje
  function broadcast(message, sender) {
    clients.forEach((client) => {
      if (client == sender) return;
      client.write(message);
    });
  }

  socket.setEncoding("utf-8");
  clients.push(socket);
  socket.name = `${socket.remoteAddress} : ${socket.remotePort}`;

  socket.write(`Welcome ${socket.name}\n`);
  broadcast(`${socket.name} ha entrado al chat\n`, socket);

  socket.on("data", (data) => {
    broadcast(`${socket.name} > ${data}`, socket);
  });

  socket.on("end", () => {
    clients.splice(clients.indexOf(socket), 1);
    broadcast(`${socket.name} ha dejado el chat`, socket);
  });
}
