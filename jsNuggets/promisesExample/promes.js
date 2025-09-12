const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    addcolor(1000,'.first', 'red')
    .then(() => addcolor(300,'.second',blue))
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err))
})



function addcolor(time,selector, color) {
    const element = document.querySelector(selector)
    return new Promise((resolve, reject) => {
        if(element) {
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time);
        }else {
            reject(`There is no such element : "${selector}`)
        }
    })
}