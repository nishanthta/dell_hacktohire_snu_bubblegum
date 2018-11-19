const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/dell';

// Database Constants
const dbName = 'dell3pls';
const collections = ['delhi', 'mumbai', 'kolkata', 'chennai', 'product_groups'];

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect()
.then(one_res => {
  console.log('Successfully connected to Mongo. Initialising database...');
  const db = client.db(dbName);
  for (let collectionName in collections) {
     db.createCollection(collectionName)
  .then((two_res) => {
    console.log('Collection ' + collectionName + ' created');
  })
  .catch((two_err) => {
    console.log(two_err);
    console.log('Collection creation failed');
  });
  }
})
.catch(one_err => {
  console.log(one_err);
  console.log('Connection to Mongo failed');
})