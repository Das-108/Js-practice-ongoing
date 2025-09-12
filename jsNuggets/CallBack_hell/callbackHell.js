// javascript Nuggets - callback. hell

// after 1st first red
// after 3s second blue
// after 2s third green
// In SEQUENCE !!!

const first = document.querySelector('.first')
const second = documnet.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'red'
        setTimeout(() => {
            second.style.color = 'blue'
        setTimeout(() => {
            third.style.color = 'green'
        },2000) 
        },3000)
    },1000)
    

})