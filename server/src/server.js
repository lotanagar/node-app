import {MongoClient} from 'mongodb';
import http from 'http';
//Importing db info from env.
const DB_HOST=process.env.DATABASE_HOST;
const DB_PORT=process.env.DATABASE_PORT;
const DB_COLLECTION=process.env.DATABASE_COLLECTION;

const MONGO_INITDB_USR=process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_INITDB_PASS=process.env.MONGO_INITDB_ROOT_PASSWORD;

const DB=process.env.MONGO_INITDB_DATABASE;

const SERVER_HOST=process.env.SERVER_HOST;
const SERVER_PORT=process.env.SERVER_PORT;


const URI = 'mongodb://admin:admin@mongo-c:27017';
const client = new MongoClient(URI);
const db = client.db(DB);
const collection = db.collection(DB_COLLECTION);



async function main() {
  try{
    await client.connect();
    console.log('Connected!!!');
    const server = http.createServer();
    //query
    server.on('request', async (req,res)=>{
      const result = await collection.findOne();
      res.end(JSON.stringify(result));
    });
    server.listen(SERVER_PORT,SERVER_HOST);
  }catch(err){
    console.error('ERROR!!!',err);
  }
}



main()
  .then(()=>console.log('SERVER STARTED!!!!!'))
  .catch(err=>console.log('ERROR!!!!',err));
