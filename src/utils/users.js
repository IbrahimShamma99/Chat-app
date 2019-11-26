const users = []

//AddUser

const AddUser = ({id,username,room}) => {
    //Clear Data 
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room){
        return {
            error:'Username and room required'
        }
    }
    //TODO : Get rid of possible Duplicates
    const existedUser = users.find((user)=>{
        return user.room === room && user.username === username
    })
    if (existedUser){
        return {
            error:"Username is in use!"
        }
    }

    //Store 
    const user = {id,username ,room}
    users.push(user)
    
    return {
        user
    }

}

//RemoveUser

const RemoveUser = (id) => {
    //Find The Position of Match
    const index = user.findIndex(() => {
        if (index !== -1){
            return users.splice(index,1)[0] 
            //Romove One Item with specific Index 
        }
    })
}

//GetUser

//GetUsersInRoom




test = AddUser({id:111,
    username:'ibrahim ',
    room:'1'})

console.log(test)