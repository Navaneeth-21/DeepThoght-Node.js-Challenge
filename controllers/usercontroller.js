const { ObjectId } = require('mongodb');
const {main} = require('../config/db');

// GET REQUEST - '/events?id=:event_id' => Gets an event by its unique id
const getEvents = async (req,res) => {
    const {id} = req.query;
    if(!id) return res.status(400).json({message:'Please Provide event id'})

    const {collection} = await main();

    let eventId = ObjectId.createFromHexString(id);

    try {
        const events = await collection.findOne({_id:eventId});
        if(!events) return res.status(404).json({message:'No Data found'});
        return res.status(200).json(events);

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', details: error.message });
    }
};



/*
GET REQUEST 
'/events?type=latest&limit=5&page=1'
Gets an event by its recency & paginate results by page number and limit of events per page
*/ 



/* 
POST REQUEST 
'/events' 
payload -> name, files[image], tagline, schedule, description, moderator, category, sub_category, rigor_rank
Creates an event and returns the Id of the event i.e. created
*/
const createEvent = async (req,res) => {
    const event = req.body;
    const {collection} = await main();
    
    try {
        const insertResult = await collection.insertOne(event);
        
        if(insertResult.insertedId){
            return res.status(201).json(insertResult);
        }
        return res.status(400).json({message:'Failed to insert the data'})
        
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', details: error.message });
    }
};


/*
PUT REQUEST 
/events/:id
Same as POST payload
*/ 



/*
DELETE REQUEST
/events/:id
Deletes an event based on its Unique Id
*/ 
const deleteEvent = async (req,res) => {
    const id = req.params.id;
    if(!id) return res.status(400).json({message:'Please Provide id'});

    const {collection} = await main();

    let eventId = ObjectId.createFromHexString(id);

    try {
        const deleteResult = await collection.deleteOne({_id:eventId});
        if(deleteResult) return res.status(201).json(deleteResult);
        return res.status(400).json({message:'Unable delete to the event'})
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error'});
    }
};



module.exports = {getEvents,createEvent,deleteEvent};