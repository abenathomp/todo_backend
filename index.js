// import the express package
 import express from 'express';

 // create an instance of express
 const app = express();

 // use this port for our server
 const port = 5000;

 // create a route to handle GET request on the index route
 app.get("/",(request, response) => {
     response.send("Hello World 👋👋👋")
 });

 // create a endpoint to get all todos
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

 // listen to incoming request on this port
 app.listen(port,  () =>
 console.log(`Server is up and running on: ${port} 🚀🚀🚀`)
    );
