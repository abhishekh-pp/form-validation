const form = document.getElementById('form')

form.addEventListener('submit', handleSubmission)

function handleSubmission(event){
    event.preventDefault()

    let allInputsCorrect = true

    const firstNameInput = document.getElementById('firstname')
    const firstNameValue = firstNameInput.value 



if (firstNameValue === ""){
    allInputsCorrect = false
    console.log("first name cannot be empty")
}

const lastNameInput = document.getElementById('lastname')
const lastNameValue = lastNameInput.value

if(lastNameValue === ""){
    allInputsCorrect = false
    console.log("last name cannot be empty")
}

const ageInput = document.getElementById('age')
const ageValue = ageInput.value

if(ageValue === ""){
    allInputsCorrect = false
    console.log("age cannot be empty")
}

if(ageValue <1){
    allInputsCorrect = false
    console.log("enter a valid age")
}

if(ageValue > 120){
    allInputsCorrect = false
    console.log("enter a valid age")
}

const phoneInput = document.getElementById('phoneno')
const phoneValue = phoneInput.value

if(phoneValue == ""){
    allInputsCorrect = false
    console.log("phone number cannot be empty")
}

if(phoneValue.length !== 10){
    allInputsCorrect = false
    console.log("enter a valid phone number")
}


const messageHolder = document.getElementById('message-holder')
const message = document.getElementById('message')

if(allInputsCorrect === true){
   messageHolder.classList.remove('hidden')
   messageHolder.classList.add('success')
   message.innerHTML = "Login success" 
}

else{
   messageHolder.classList.remove('hidden')
   messageHolder.classList.add('failed')
   message.innerHTML = "Login failed"
}
    
}

