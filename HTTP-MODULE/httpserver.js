//To create a server
const http=require("http");
const PORT=3000;
const server=http.createServer((req,res)=>{
    res.write("BOOM!!!!");
    res.end();
});
server.listen(PORT,()=>{
    console.log(`server is started at PORT:${PORT}`);
});