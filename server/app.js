const express = require("express")
const app = express()
const Port=process.env.PORT || 8080;
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const doctorRoute= require("./Routes/doctorRouter");
require("dotenv").config();


app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/doctor", doctorRoute);



mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
}).catch((error)=>{
  console.log(error);
})





app.listen(Port,()=>{
  console.log(`server run on ${Port}`);
})