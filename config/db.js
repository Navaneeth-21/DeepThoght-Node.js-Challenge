const {MongoClient} = require('mongodb')
require('dotenv').config();

const uri = process.env.MONGO_URI;
const dbName = 'DTNodejs_project';
const collectionName = 'mydocuments';

const client = new MongoClient(uri);

async function main() {
    try{
        await client.connect();
        console.log('Database connected Successfully');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        return{db , collection};
    }
    catch(err){
        console.log(err);      
        return null;
    }
    
};

module.exports = {main};