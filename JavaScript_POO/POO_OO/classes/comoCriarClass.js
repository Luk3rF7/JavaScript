class Product {
    constructor(name,price){
        this.name = name
        this.price =price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount)/ 100)
    }
}

const shirt = new Product('Camisa Gola V',20.00)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

const tenis = new Product('tenis Verde', 199.90)
