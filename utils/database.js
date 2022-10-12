import { MongoClient, ObjectId } from "mongodb";

const dbName = "db-name";
const url = `mongodb+srv://mpendulo:1Z4tYLNu5Bo4jW7e@cluster0.bhv2lkm.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db(dbName);
  return { db, client };
}

export { connect, ObjectId };
