import { MongoClient } from "mongodb";


// Encode the MongoDB password from the environment variable
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());


// Connection string for MongoDB Atlas cluster
const connectionString = `mongodb+srv://vk9338530:${password}@cluster0.8yfkcl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // clustore url


// Create a new MongoClient instance
const client = new MongoClient(connectionString);


// Attempting to connect to the MongoDB cluster
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}


// Select the specific database ("IPL-Points-Table") to use
let db = conn.db("IPL-Points-Table");


// Export the database connection for use in other modules
export default db;
