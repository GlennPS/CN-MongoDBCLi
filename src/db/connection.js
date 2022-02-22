
require("dotenv").config();
const { MongoClient } = require("mongodb");
//creates a new client to connect to

const client = new MongoClient(process.env.MONGO_URI);
//connecting to cloud hosted site via MDB atlas.  Whenever <wordyword> appears you replce with what is requested

const connection = async () => {
    try {
        await client.connect();
//Needs an await because its speaking externally with MongoDB
        const db = client.db("Movies");
        return db.collection("Film");
    }
    catch (error) {
        console.log(error)
    }
};

module.exports = { client, connection};