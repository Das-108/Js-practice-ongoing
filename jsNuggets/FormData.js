const form = document.querySelector('.form')
const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.password-input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    // check for empty values
    if (!nameValue || !passwordValue || !emailValue) {
        console.log('please provide values')
        return
    }
    // do something
    console.log(nameValue,emailValue,passwordValue)

    // after that clear Values
    nameInput.value = ''
    passwordInput.value = ''
    emailInput.value =''
})