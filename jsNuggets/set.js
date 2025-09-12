// set Object - stores collection of value of any type

// new Set()
//add(value)
//delete(value)
// clear()
// has(value)

//iterators
// entries(),keys(),values(), forEach()

const unique = new Set()

const random = 'third'

unique.add('first')
unique.add('second')
unique.add('first')
unique.add(random)
unique.add(4)

const result = unique.delete('five')
console.log(result)

const isvalue = unique.has(4)
console.log(isvalue)

console.log(unique)

//new set - accepts iterable objects

const products = [
    {
        title: 'high-back bench',
        company: 'ikea',
    },
    {
        title: 'albany table',
        company: 'marcos',
    },
    {
        title: 'accent chair',
        company : 'caressa',
    },
    {
        title: 'wooden Table',
        company: 'ikea',
    }
]

const comapnies = products.map((item) => item.company)
console.log(company)

const uniqueCompanises = new Set(companies)
console.log(uniqueCompanises)

const finalCompanies = ['all',...uniqueCompanises]
console.log(finalCompanies)