
const express = require("express")
const app = express();

const path = require("path")
const rootdir = require("./Path/Path")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
let data = "server started"
const resObj=[]
//endpoint for params

app.get("/update/:newData", (req, res) => {

    console.log(req.params.newData)
   // data = req.params.newData;
    if(req.params.newData!=data){
      while(resObj.length>0){
        data=req.params.newData
        resObj.pop().send({data})
      }  
    }
  
    res.send(data)
})

//endpoint for query

app.get("/update", (req, res) => {

    console.log(req.query.data)
    data = req.query.data;
    res.send(data)
})

app.get("/newdata/:oldData", (req, res) => {
    // console.log(path.join(rootdir,"index.html"))
    // res.sendFile(path.join(rootdir,"index.html"))
    let oldData = req.params.oldData
    if (oldData == data) {
        resObj.push(res)
    }
    else {
        res.send({ data: data })
    }
})
app.get("/", (req, res) => {
    console.log(path.join(rootdir, "index.html"))
    res.sendFile(path.join(rootdir, "index.html"))
    // res.send("hii from server")
})


app.listen(3000, () => {
    console.log("server is running")
})