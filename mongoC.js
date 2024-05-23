import { MongoClient } from "mongodb";
/*import dotenv from 'dotenv';

dotenv.config();
*/

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
console.log(password);
const connectionString = `mongodb+srv://vk9338530:${password}@cluster0.8yfkcl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // clustore url mongo with correct pass

const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful");
} catch(e) {
  console.error(e);
}
let db = conn.db("IPL-Points-Table");
export default db;


/* import { MongoClient } from "mongodb";
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