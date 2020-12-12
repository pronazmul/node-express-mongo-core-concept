const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())

const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://user_1:1WD2TgzErIZGarIV@cluster0.3dz05.mongodb.net/db_1?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const ObjectId = require('mongodb').ObjectId


client.connect(err => {
  const collection = client.db("db_1").collection("crud")

  //Data Insert Request.....
  app.post("/insert", (req, res) => {
    collection.insertOne(req.body)
      .then(result => {
        res.send('Data Successfully Inserted')
      })
  })

  //Data Select from Database....   
  app.get("/select", (req, res) => {
    collection.find({})
      .toArray((err, document) => {
        res.send(document)
      })
  })

  //Select Single Data For Update...
  app.put("/single", (req, res) => {
    collection.find({ _id: ObjectId(req.headers.id) })
      .toArray((err, document) => {
        res.send(document)
      })
  })

  //Update Data ......
  app.patch("/update", (req, res) => {
    collection.updateOne({ _id: ObjectId(req.body._id) },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
          website: req.body.website,
          mobile: req.body.mobile
        }
      })
      .then(result => {
        res.send('Successfully Data Updated')
      })
  })

  //Delete Data....
  app.delete("/delete", (req, res) => {
    collection.deleteOne({_id:ObjectId(req.headers.id) })
      .then(result => {
        res.send('Data Successfully Deleted')
      })
  })
})

app.get('/', (req, res) => res.send("Welcome Programmer Your API Is Ready for Operation"))
app.listen(port)
