const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Chat-app", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


console.log(process.env.MONGODB_URL)