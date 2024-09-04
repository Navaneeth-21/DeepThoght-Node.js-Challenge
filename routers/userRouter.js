const express = require('express');
const {getEvents,getEventByQuery,createEvent,updateEvent,deleteEvent} = require('../controllers/usercontroller');

const router = express.Router();

// Routes
router.get('/events/:id' , getEvents);
router.get('/events' , getEventByQuery);
router.post('/events', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id' ,deleteEvent);


module.exports = router;