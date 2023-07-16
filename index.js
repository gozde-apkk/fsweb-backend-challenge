const server =require("./api/server");

const {PORT} =require('./config')

server.listen(port, () =>{
    console.log(`Server listenin on ${port}`);
})