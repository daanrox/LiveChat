import cors from 'cors';
import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true,
}));


const server = http.createServer(app);
const io = new Server(server, {
  path: '/socket.io',
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  }
});



interface Message {
  nickName: string;
  gender: string;
  message: string;
  date: string
}

io.on('connection', (socket: Socket) => {
  console.log('User connected');

  socket.on('message', (message: Message) => {
    console.log('New message:', message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
