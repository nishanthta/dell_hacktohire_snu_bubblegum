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
const client = new MongoClient(url, { useNewUrlParser: true });

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
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

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

        app.post('/delete-all-items', (req, res) => {
            const location = req.query.location;
            client.db(dbName).collection(location).remove({})
                .then(success => {
                    console.log(success);
                    res.sendStatus(200);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                })
        });

        app.get('/get-item', (req, res) => {
            const location = req.query.location;
            const id = req.query.id;
            const result = client.db(dbName).collection(location).findOne({ "": id }).toArray((err, docs) => {
                if (err) {
                    res.send(JSON.stringify(err));
                } else {
                    res.send(docs);
                }
            })
        });

        app.post('/move-item', (req, res) => {
            const src = req.query.src;
            const dest = req.query.dest;
            const item = req.body;
            client.db(dbName).collection(src).findOneAndDelete({_id: ObjectId(item._id)})
            .then(res1 => {
                res.sendStatus(200);
                client.db(dbName).collection(dest).insertOne(item)
                .then(res2 => {
                    res.sendStatus(200);
                })
                .catch(err2 => {
                    res.send(JSON.stringify(err2));
                });
            })
            .catch(err => {
                console.log(err);
            });
        });

        app.get('/get-items', (req, res) => {
            // how many posts can be accomodated in one page
            const perPage = req.query.perPage;
            // page user is currently on, 1 by default
            const currentPage = req.query.currentPage || 1;
            const location = req.query.location;
            const result = client.db(dbName).collection(location).find().skip(perPage * (currentPage - 1)).limit(Number(perPage)).sort({ _id: -1 }).toArray((err, docs) => {
                if (err) {
                    res.send(JSON.stringify(err));
                } else {
                    res.send(docs);
                }
            })
        });

        app.get('/get-old', (req, res) => {
            //paginate old?
            client.db(dbName).collection("chennai").find({ "localage": { $gte: 90 } }).toArray(function (err, docs) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    for(var i=0; i<docs.length; i++) {
                        fetch('http://localhost:5000', docs[i]
                            )
                        .then(res => {
                            
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                    client.db(dbName).collection("old").insertMany(docs)
                }
                client.db(dbName).collection("delhi").find({ "localage": { $gte: 90 } }).toArray(function (err, docs) {
                    if (err) {
                        res.sendStatus(500);
                    } else {
                        client.db(dbName).collection("old").insertMany(docs)
                    }
                    client.db(dbName).collection("kolkata").find({ "localage": { $gte: 90 } }).toArray(function (err, docs) {
                        if (err) {
                            res.sendStatus(500);
                        } else {
                            client.db(dbName).collection("old").insertMany(docs)
                        }
                        client.db(dbName).collection("mumbai").find({ "localage": { $gte: 90 } }).toArray(function (err, docs) {
                            if (err) {
                                res.sendStatus(500);
                            } else {
                                client.db(dbName).collection("old").insertMany(docs)
                            }
                            client.db(dbName).collection("old").find({}).toArray(function (err, docs) {
                                if (err) {
                                    res.sendStatus(500);
                                } else {
                                    res.send(docs);
                                }
                            });
                        });
                    });
                });
            });
        });

        app.post('/get-old/move', (req, res) => {
            const locationto = req.query.locationto;
            const obj = req.body.item;
            client.db(dbName).collection(obj.location).remove(obj)
            if (err) {
                res.sendStatus(500);
            } else {
                console.log(success);
                res.sendStatus(200);
            }
            client.db(dbName).collection("old").remove(obj)
            if (err) {
                res.sendStatus(500);
            } else {
                console.log(success);
                res.sendStatus(200);
            }
            obj.location = location
            client.db(dbName).collection('transit').insertOne(obj)
                .then(success => {
                    console.log(success);
                    res.sendStatus(200);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                })
        });

        app.post('/get-transit', (req, res) => {
            const obj = req.body.item;
            obj.localage = 0;
            client.db(dbName).collection("transit").remove(obj)
            if (err) {
                res.sendStatus(500);
            } else {
                console.log(success);
                res.sendStatus(200);
            }
            client.db(dbName).collection("obj.location").insertOne(obj)
                .then(success => {
                    console.log(success);
                    res.sendStatus(200);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                })
        });
        app.listen(3000, () => {
            console.log('Example app listening on port 3000!')
        });
    })
    .catch(err => {
        console.log(err);
    });
