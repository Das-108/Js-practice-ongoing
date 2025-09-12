// string includes() - checks if a string conatins another string

const products = [
   {title : 'Modern Poster'},
   { title: 'Bar Stool'},
   { title: 'ArmChair'},
   { title: 'Leather Chair'},
]

const text = 'ad'

const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(text))

console.log(filteredProducts)




const firstName = 'john'

const result = firstName.includes('jo')

console.log(result)


const product = {
    title : 'Nitai Gauranga'
}

const outcome = product.title.includes('Le')