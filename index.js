const server =require("./api/server");

const {PORT} =require('./config')

server.listen(PORT, () =>{
    console.log(process.env.NODE_ENV === 'production')
    console.log(`Server listenin on ${PORT}`);
})