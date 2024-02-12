const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

// Create
router.post('/create', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).send(user)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to create a new user' })
    }
})


// Read
router.get('/read', async (req, res) => {
    try {
        const db = await User.find({})
        res.status(200).send(db)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to create a new user' })
    }
})


// Update



// Delete

module.exports = router