//import mongoose package
import mongoose from 'mongoose';

// unpack Schema & model from mongoose 
const {Schema, model} = mongoose;

//the Schema defines the structure of our collection(Table) in MongoDB
// the model defines how data will modeled for our collection
// and comes along with built in features to manipulate the data

// create a new Schema instance specifying which
// fields(colums) we want in our collection(Table)
const todoSchema = Schema({
    title: String,
    description: String,
    dateTime: String,
    isCompleted: Boolean
});

//then we make a model
// by passing in the name and a schema for our model
const Todo = model('todo', todoSchema);