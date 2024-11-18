const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
app.use(cors())

app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/todo").then(()=>console.log("DB Success")).catch(()=>
console.log("DB Fail"))

//creating Model
const fruits=mongoose.model("fruits",{name:String},"fruit")//collection name cmd)


app.get("/fruitlist",function(req,res)
{
    fruits.find().then(function(retdata)
{
    console.log((retdata))
    res.send(retdata)
    
})
   
})
app.post("/addfruit",function(req,res)
{
   const newfruit=req.body.newfruit
   const newFruit=new fruits(
    {
        name:newfruit
    }

   )//model name
   newFruit.save().then(()=>{console.log("sucessfully svaed");
   })

})
app.listen(5000,function()
{
    console.log("server started");
    
})
