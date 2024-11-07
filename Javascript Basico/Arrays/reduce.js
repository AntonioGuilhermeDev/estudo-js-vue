const rockets = [
    {country: "USA", launches: 40},
    {country: "China", launches: 38},
    {country: "Russia", launches: 36 },
    {country: "Japan", launches: 30},
    {country: "Canada", launches: 20},
]

const totalOfLaunches = rockets.reduce((acc, rocket) => acc + rocket.launches, 0)
console.log(totalOfLaunches)

const products = [
    {name: "Keyboard", price: 150},
    {name: "Alexa", price: 500},
    {name: "TV", price: 1700},
    {name: "Game", price: 400}
]

const productsTotal = products.reduce((acc, product) => acc + product.price, 0);
console.log(productsTotal);