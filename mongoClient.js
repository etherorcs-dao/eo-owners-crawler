import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 50,
  wtimeoutMS: 2500,
});

export default mongoClient;
