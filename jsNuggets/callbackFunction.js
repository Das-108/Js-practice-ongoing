function makeUppercase(value) {
    console.log(value.toUppercase())
}
// makeUppercase('peter')

function reverseString(value) {
    console.log(value.split('').reverse().join(''))
}

function handleName(name, cb) {
    const fullName = `${name} smith`
    cb(fullName)
    // some more logic
}

// handleName('peter', makeUppercase)
handleName('susan', function (value) {
    console.log(value)
})

//array methods, setTimeout, Event Listeners etc

const  btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log()
})