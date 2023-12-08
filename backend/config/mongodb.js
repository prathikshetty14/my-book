import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

const db_connect = async function run() {
  try {
    
    const database = client.db("reach-best");
    const formCollection = database.collection("form-collection");
    const booksCollection = database.collection("books-collection");
    const db = {database, formCollection, booksCollection}
    console.log("Connected to DB :: MongoDB")
    return db;
  } catch (error){
    console.log("Error in DB", error);
  }
}

export default db_connect;
