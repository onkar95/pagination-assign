const mongoose = require('mongodb').MongoClient
const express = require('express');
const app = express();

const cors = require('cors')
const rout = express.Router();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 5000


var database;

const mongoDB = "mongodb+srv://onkar:onkar@cluster0.qey1d.mongodb.net/todo?retryWrites=true&w=majority";

    

    // paginated

    // app.get('/todo', (req, res) => {
    //     database.collection('todo').find({}).toArray((err, data) => {
    //         if (err) {
    //             res.status(500).send(err)
    //         } else {
    //             const page = parseInt(req.query.page)
    //             const limit = parseInt(req.query.limit)

    //             const startIndex = (page - 1) * limit
    //             const endIndex = page * limit
    //             const results = {}

    //             if (endIndex < data.length) {
    //                 results.next = {
    //                     page: page + 1,
    //                     limit: limit
    //                 }
    //             }
    //             if (endIndex > 0) {
    //                 results.previous = {
    //                     page: page - 1,
    //                     limit: limit
    //                 }
    //             }
    //             results.results = data.slice(startIndex, endIndex)
    //             res.json(results)
    //         }
    //     })

    // })

    //with out paginated


app.get('/todo', (req, res) => {
    database.collection('todo').find({}).toArray((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            data.sort((b, a) => {
                return a.timestamp - b.timestamp;
            })
            res.status(200).send(data)
        }
    })
})


app.listen(PORT, () => {
    mongoose.connect(mongoDB,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (error, data) => {
            if (error) throw error
            database = data.db('salozone-salon')
            console.log('connection build');
        })
})
