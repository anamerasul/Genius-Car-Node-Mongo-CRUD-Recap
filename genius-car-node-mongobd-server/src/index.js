import 'dotenv/config'
import express from 'express'
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';



const app = express()
const port = process.env.PORT || 5000;



// middleware 

app.use(cors())

app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.xbgux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object

// });

const run = async () => {
    try {
        await client.connect();

        console.log("db connected");
        const usercollection = client.db("geniousCar").collection("service");

        // const users = { name: 'mahi', email: 'mahi@gmail.com' }
        // const result = await usercollection.insertOne(users)
        // console.log(`inserted with the _id: ${result.insertedId}`)

    } finally {
        // await client.close();
    }

}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send(` running my geneus car server`)

});


app.listen(port, () => {
    console.log("Listening to port", port)
})

