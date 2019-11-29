const express = require("express")
const {routes} = require("../utils/routes")
const User = require("../models/user")
const Room = require("../models/room")
const auth = require('../middleware/auth')
const router = new express.Router()

router.post(routes.newroom, async (req , res) => {

    const room = new Room(req.body)
    
    try {
        await room.save()
        res.status(201).send({room})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router