/* import express from 'express';
import bodyParser from 'body-parser';

import db from "./mongoC.js";

const port = 4000;
const app = express();

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));
 
// Parses the text as json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello world, this is me Umang');
})

app.post('/addUser',async (req, res) => {
    let collection = await db.collection("users");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    console.log("rreq"+req.body);
    res.send(result).status(204);
});

app.get('/getUsers', async(req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({})
      
      .toArray();
    res.send(results).status(200);
});

app.listen(port, function () {
    console.log("Server is listening at port:" + port);
}); */

import express from 'express';
import bodyParser from 'body-parser';
import { connectDB, getDB } from './mongoC.js';  // Import the connectDB and getDB functions

require('dotenv').config();
const port = 4000;
const app = express();

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world, this is me Umang');
});

app.post('/addUser', async (req, res) => {
    try {
        const db = getDB();
        const collection = db.collection("users");
        const newDocument = req.body;
        newDocument.date = new Date();
        const result = await collection.insertOne(newDocument);
        console.log("Request body: ", req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send({ error: 'An error occurred while adding the user.' });
    }
});

app.get('/getUsers', async (req, res) => {
    try {
        const db = getDB();
        const collection = db.collection("users");
        const results = await collection.find({}).toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send({ error: 'An error occurred while retrieving the users.' });
    }
});

// Connect to the database before starting the server
connectDB().then(() => {
    app.listen(port, () => {
        console.log("Server is listening at port:" + port);
    });
}).catch(error => {
    console.error('Failed to connect to the database. Server not started.', error);
});

 