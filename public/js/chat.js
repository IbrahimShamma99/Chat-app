const socket = io()

//Element 
const $MessageForm = document.querySelector("#SendMessageForSever")
const $Message = document.querySelector("input")
const $MessageFormButton = document.querySelector("button")
const $SendLocation = document.querySelector("#send-location")

socket.on("WelcomingMessage",(WelcomingMessage) => {
    
    console.log(WelcomingMessage)
        
})

$MessageForm.addEventListener("submit",(pp) => {
    pp.preventDefault() //for Cancelling Event {No Response}

    $MessageFormButton.setAttribute('disabled','disabled') //Disable Button after it is being Clicked

    const messageFromClient = document.querySelector('input').value //Take The Value from input
    console.log("Clicked") //To Check if it is clicked
    
    socket.emit("SendMessageForSever",messageFromClient,()=> {
    $MessageFormButton.removeAttribute('disabled')
    $Message.value = ''
    $Message.focus()
    console.log("message was delivered")
    }) //Open back Socket From Client to Server To transfer Data
})

socket.on("BroadCast Message",(input) =>{
    console.log(input)
})

socket.on("Message", (p) =>{
    console.log(p)
})

$SendLocation.addEventListener('click', () =>{
    if (!navigator.geolocation){
        return alert("Please Provide Location")
    }
    $SendLocation.setAttribute("disabled",'disabled')
    console.log("Location has been shared")

    socket.on("Broadcast Location With Users", (p) =>{
        console.log(p)
    })

    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.longitude)
        socket.emit("Broadcast Location",{'latitude':position.coords.latitude,
        'longitude':position.coords.longitude})
        $SendLocation.removeAttribute('disabled')
    

    })
   
    
    
        

})
