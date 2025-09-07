const udemy = 'udemy'
// console.log(Array.from(udemy))

const text = document.querySelectorAll('.text')

const newText = Array.from(text).find((item) => item.textContent === 'person')
// console.log(newText)

const items = Array.from({length: 120}, (_,index) =>{
    return index
})

const itemsPerPage = 14
const pages = Math.ceil( items.length / itemsPerPage )


const newItems = Array.from({length: pages}, (_,index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage)
    return tempItems
})


console.log(newItems)