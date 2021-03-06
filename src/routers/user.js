const express = require("express")
const {routes} = require("../utils/routes")
const User = require("../models/user")
const Room = require("../models/room")
const auth = require('../middleware/auth')
const router = new express.Router()

router.post(routes.signup , async (req , res) => {
    
    const user = new User(req.body)
    
    try {
        // TODO sendWelcomeEmail(user.email, user.name)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router