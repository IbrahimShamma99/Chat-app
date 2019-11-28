const express = require("express")
const {routes} = require("../utils/routes")
const User = require("../models/user")
const router = new express.Router()
const auth = require('../middleware/auth')

router.post(routes.signup, async (req , res) => {
    const user = new User(req.body)
    
    try {
        await user.save()
        // TODO sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }

})


module.exports = router