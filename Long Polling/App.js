
const  express=require("express")
const app= express();

const path=require("path")
const rootdir=require("./Path/Path")

app.use("/",(req,res)=>{
    console.log(path.join(rootdir,"index.html"))
    res.sendFile(path.join(rootdir,"index.html"))
   // res.send("hii from server")
})


app.listen(3000,()=>{
    console.log("server is running")
})