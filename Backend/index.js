const express =require('express');
const cors =require('cors');

const app = express();
const port = process.env.PORT || 5000;


// middle ware 

app.use(cors());
app.use(express.json());

// userName: hossainahmmedtaufiq22   password: 2CmrX5EoTC6tQarU

// connect to the server 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hossainahmmedtaufiq22:2CmrX5EoTC6tQarU@cluster0.sxdwbrq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const database = client.db("userDB");
    const usersCollection = database.collection("users");



    app.get("/users", async(req,res)=>{
      const cursor =usersCollection.find()
      const result = await cursor.toArray();
      res.send(result)


    })


    app.post('/users',async(req,res)=>{
      const user= req.body;
      console.log('new user',user);
      const result =  await usersCollection.insertOne(user);
      res.send(result);

    })









    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







// get 

app.get('/', (req,res)=>{
   res.send("backend running successfully ")
})

app.listen(port, ()=>{
    console.log(`simple crud is running on port ${port}`);
})





// practice normal async functions 


// try {

// }

// catch{

// }
// finally{

// }





