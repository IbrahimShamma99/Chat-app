const User = require("../src/models/user")

const user = new User({
    "password": "nigga2019nigga",
    "email": "i.abushammah@gmail.com",
    "name": "Ibrahim"
})

console.log(user)

console.log("It is working")