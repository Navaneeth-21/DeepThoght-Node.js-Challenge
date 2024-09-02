const express = require('express');
const {getEvents,createEvent,deleteEvent} = require('../controllers/usercontroller');

const router = express.Router();

router.get('/events' , getEvents);
router.post('/events', createEvent);
router.delete('/events/:id' ,deleteEvent);


module.exports = router;