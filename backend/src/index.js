const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 4000;
const route = require('./routes');
const db = require('./config/db');
const path = require('path');
const io = require('socket.io')(server);
const socket = require('./helpers/socket');
const cors = require('cors');

//CORS for domain
app.use(cors({origin : 'http://localhost:3000'}))

//handle form 
app.use(express.urlencoded({extended : true}));

//handle json 
app.use(express.json());

//handle static file 

app.use(express.static(path.join(__dirname,'public')))

//connect to database 
db.connect()
    .then(res => console.log('connect successfully '))
    .catch(error => console.log(`connect error ${error}`));

//initial socket 
socket.initialSocket(io);

//initial routes;
route(app);


server.listen(port , () => console.log(`listening to port ${port}`));