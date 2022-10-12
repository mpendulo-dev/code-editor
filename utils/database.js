import { MongoClient, ObjectId } from "mongodb";

const dbName = "db-name";
const url = process.env.NEXT_PUBLIC_MONGODB;

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
