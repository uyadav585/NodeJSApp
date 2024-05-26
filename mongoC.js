
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vk9338530:${password}@cluster0.8yfkcl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("IPL-Points-Table").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

let db = conn.db("");
export default db;





/* import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();


const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
//console.log(password);
let connectionString = `mongodb+srv://vk9338530:${password}@cluster0.8yfkcl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // clustore url mongo with correct pass
console.log(connectionString);
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful");
} 
catch (e) {
    console.error("Failed to connect to MongoDB Atlas", e);
    process.exit(1); // Exit the process with failure
}

let db = conn.db("");
export default db;
*/


// both are same code just different in style


/* import { MongoClient } from "mongodb";..................
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_PASSWORD) {
    console.error('Error: MONGO_PASSWORD is not set in the environment variables.');
    process.exit(1); // Exit the application with an error code
}

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://vk9338530:${password}@cluster0.8yfkcl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(password);

let db;

const connectDB = async () => {
    try {
        const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("MongoDB connection successful");
        db = client.db("IPL-Points-Table");
    } catch (e) {
        console.error("MongoDB connection error:", e);
        throw e;  // Re-throw the error after logging it
    }
};

const getDB = () => {
    if (!db) {
        throw new Error('Database not initialized. Call connectDB first.');
    }
    return db;
};

export { connectDB, getDB };
*/