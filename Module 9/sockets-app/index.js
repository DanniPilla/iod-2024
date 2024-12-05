const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let users = {};

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("set nickname", (nickname) => {
    const userNickname = nickname || `Guest${Math.floor(Math.random() * 1000)}`;
    users[socket.id] = userNickname;
    io.emit("update users", Object.values(users));
    io.emit("user connection", `${userNickname} connected`);
  });

  socket.on("chat message", (msg) => {
    const nickname = users[socket.id] || "Anonymous";
    socket.broadcast.emit("chat message", `${nickname}: ${msg}`);
    console.log(`${nickname}:  ${msg}`);
  });

  socket.on("user typing", () => {
    const nickname = users[socket.id] || "Anonymous";
    io.emit("user typing", nickname);
    console.log("user typing");
  });

  socket.on("stop typing", () => {
    io.emit("stop typing");
  });
  socket.on("private message", ({ recipient, message }) => {
    const sender = users[socket.id];
    const recipientSocketId = nicknamesToSocketId[recipient];

    if (recipientSocketId) {
      io.to(recipientSocketId).emit("private message", {
        sender,
        message,
      });
    }
  });

  socket.on("disconnect", () => {
    const nickname = users[socket.id];
    io.emit("user connection", `${nickname} disconnected`);
    console.log("user disconnected");
    io.emit("update users", Object.values(users));
    delete users[socket.id];
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
