const socket = io()

socket.on("WelcomingMessage",(WelcomingMessage) => {
    
    console.log(WelcomingMessage)
        
})

document.querySelector("#SendMessageForSever").addEventListener("submit",(pp) => {
    pp.preventDefault() //for Cancelling Event {No Response}
    const messageFromClient = document.querySelector('input').value //Take The Value from input
    console.log("Clicked") //To Check if it is clicked
    socket.emit("SendMessageForSever",messageFromClient) //Open back Socket From Client to Server To transfer Data
})

