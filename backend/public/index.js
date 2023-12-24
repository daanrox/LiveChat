"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST'],
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    path: '/socket.io',
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('message', (message) => {
        console.log('New message:', message);
        io.emit('message', message);
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
