// import the express package
 import express from 'express';

 // import the mon
 import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

 // create an instance of express serverss
 const app = express();

 //use the express.json middleware to decode the body of a request
 app.use(express.json());

 // use this port for our server
  const port = 5000;

 // create a route to handle GET request on the index route
 app.get("/",(request, response) => {
     response.send("Hello World 👋👋👋")
 });

 // a temporal variable to store our todos
 //we will later store them in a database


 
     // add the incoming datato our t

 // careate a endpoint to get all todos
 app.get("/todos", (req, res) =>{
     // read all todos from our database
     res.json([
         {
             title: "Connect to the database",
             description: "to store and read all our todos from the database",
             date: "26/11/2021",
             time: "4:30 pm",
             isComplete: false,
         },
     ]);
 });
 
 //make the handler an async function by the async keyword
 app.post('/todo',async (req, res)=>{
     // extract the necessary fields from the body
     const {title, description, dateTime, isCompleted} = req.body;
     // create a Todo model with the necessary fields
     const newTodo = Todo({
         title:title,
         description:description,
         dateTime:dateTime,
         isCompleted:isCompleted
     });

     //save the Todo model and await the result
     const result= await newTodo.save();
     // send back a response with the result in a json format
     res.json(result)
 });

 //connect to mongoDB Atlas
 mongoose.connect(process.env.MONGO_DB_CON_STRING,(error)=>{
     if(error){
         return console.log("Couldn't connect to MongDB");
     }
     //else log out that connection was successful
     else{
         console.log("Connection to MongoDB was successful");
         //started the server to listen to incoming requests on the specified port
 // listen to incoming request on this port
 app.listen(port,  () =>
 console.log(`Server is up and running on: ${port} 🚀🚀🚀`)
    );
     }
    });

