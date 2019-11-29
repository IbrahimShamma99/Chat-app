const mongoose = require('mongoose')
const config = require("../config/config")


let port = config.redis.port;
let host = config.redis.host;
let appname = config.redis.appname
let db = config.redis.db
console.log(port)
console.log(host)
mongoose.connect(db+host+":"+port + "/"+appname, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


//console.log(process.env.MONGODB_URL)