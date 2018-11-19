// Initialise MongoDB connection
// Assumes Mongo has been set up on machine with required database and collection

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

// Connection URL
const url = 'mongodb://localhost:27017/dell';

// Database Constants
const dbName = 'dell3pls';
const delhiCollectionName = 'delhi';
const mumbaiCollectionName = 'mumbai';
const kolkataCollectionName = 'kolkata';
const chennaiCollectionName = 'chennai';
// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect((err) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");
});

client.connect()
.then(res => {
    console.log('client.connect() succeeded');
    const express = require('express');
    const app = express();
    app.use(express.json());

    app.post('/add-item', (req, res) => {
        const location = req.query.location;
        client.db(dbName).collection(location).insertOne(req.body)
        .then(success => {
            console.log(success);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
    });

    app.get('/get-items', (req, res) => {
        const location = req.query.location;
        client.db(dbName).collection(location).find({}).toArray(function(err, docs) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.send(docs);
		}
 	});
    });

    app.listen(3000, () => {
        console.log('Example app listening on port 3000!')
    });
})
.catch(err => {
    console.log(err);
})

