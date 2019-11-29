const Mongoose = require('mongoose')

var RoomSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    connections: { type: [{ userId: String, socketId: String }]}
});

RoomSchema.methods.toJSON = function () {
    const room = this
    const roomObject = room.toObject()

    return roomObject
}


RoomSchema.pre('save', async function (next) {
    const room = this

    next()
})

var roomModel = Mongoose.model('Room', RoomSchema);

module.exports = roomModel;

