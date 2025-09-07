// reduce - objects

//cart example
const cart = [
    {
        title : 'Samasung Galaxy s7',
        price: 599.9,
        amount: 1,
    },
    {
        title: 'google pixel',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        amount: 3,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 2,
    },
];

let {totalItems, cartTotal} = cart.reduce((total, cartItems) => {
    const { amount, price} = cartItems
    //count items
    total.totalItems += amount
    //count sum
    total.cartTotal += amount * price
    return total
},{
    totalItems: 0,
    cartTotal : 0,
})

constTotal = parseFloat(cartTotal.toFixed(2))

console.log(totalItems,cartTotal);


//github repos example
const url = 'https://api'