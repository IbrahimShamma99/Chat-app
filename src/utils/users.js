const users = []

//AddUser

const AddUser = ({ id, username = '', room }) => {
    // NOTE: Clear Data 
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username and room required'
        }
    }
    // TODO : Get rid of possible Duplicates
    const existedUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    if (existedUser) {
        return {
            error: "Username is in use!"
        }
    }

    // NOTE: Store 
    const user = { id, username, room }
    users.push(user)

    return { user };
}

//RemoveUser

const RemoveUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        user = users.splice(index, 1)[0]
        return { user }
    }
}

const GetUser = (id) => {
    user = users.find((user) => user.id === id)
    return { user }
}

const GetUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    GetUser,
    GetUsersInRoom,
    RemoveUser,
    AddUser
}

// console.log(users)

// User_1 = AddUser({id:111,
//     username:'ibrahim ',
//     room:'1'})

// User_2 = AddUser({id:11,
//         username:'ibrahimShamma ',
//         room:'1'})

// console.log("AddUser1: ",User_1)
// console.log("AddUser2: ",User_2)

// test_GetUser=GetUser(111)

// console.log("GetUser: ",test_GetUser)

// //console.log(users)

// test_removeuser = RemoveUser(111)

// console.log(test_removeuser )

// console.log(users)
