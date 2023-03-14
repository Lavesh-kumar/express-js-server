const express=require("express")
const env=require("./config/envconfig")
const connect=require("./config/db")
const router=require("./routes/userroutes");







//server
const app=express();
const port=env.PORT||5000;
//database connection
connect();

app.get("/",(req,res)=>{
res.send("homeroutes")

})
app.use(router);

app.listen(port,()=>{
console.log(`server is running ap port at ${port}`)
})