const socket = io()

socket.on("WelcomingMessage",(WelcomingMessage) => {
    
    console.log(WelcomingMessage)
        
})

document.querySelector("#SendMessageForSever").addEventListener("submit",(pp) => {
    pp.preventDefault() //for Cancelling Event {No Response}

    
    const messageFromClient = document.querySelector('input').value //Take The Value from input
    console.log("Clicked") //To Check if it is clicked
    
    socket.emit("SendMessageForSever",messageFromClient,()=> {
    console.log("message was delivered")
    }) //Open back Socket From Client to Server To transfer Data
})

socket.on("BroadCast Message",(input) =>{
    console.log(input)
})

socket.on("Message", (p) =>{
    console.log(p)
})

document.querySelector("#send-location").addEventListener('click', () =>{
    if (!navigator.geolocation){
        return alert("Please Provide Location")
    }

    socket.on("Broadcast Location With Users", (p) =>{
        console.log(p)
    })

    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.longitude)
        socket.emit("Broadcast Location",{'latitude':position.coords.latitude,
        'longitude':position.coords.longitude})

    })
   
    
    
        

})
