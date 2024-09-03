const express = require('express');
const {getEvents,getEventByQuery,createEvent,deleteEvent} = require('../controllers/usercontroller');

const router = express.Router();

router.get('/events/:id' , getEvents);
router.get('/events' , getEventByQuery);
router.post('/events', createEvent);
router.delete('/events/:id' ,deleteEvent);


module.exports = router;