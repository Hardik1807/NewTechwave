const express=require("express");
const app=express();
const cors=require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/users.routes");
const { productRouter } = require("./routes/course.routes");

//internal middlewares..................
app.use(cors());
app.use(express.json());
app.use("/users",userRouter);
app.use("/courses",productRouter);
const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("server is working");
})

const connectToDatabase = require("./db"); // Adjust path as necessary
connectToDatabase();


app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});

// app.listen(8080,async()=>{
//     try{
//         await connection;
//         console.log("server is running at port 8080");
//     }
//     catch(err){
//         console.log("server error");
//     }
// })






// Connect to MongoDB
