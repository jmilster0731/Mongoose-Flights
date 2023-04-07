const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets')

// new
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

// create
router.post('/flights/:id/tickets', ticketsCtrl.create)

module.exports = router;