// create a js program to store c
//Illustrate the different use cases of js array function in order to insert read and delete the elements in that array
//at least use 10 differnt object in that array
// the product should contain at least name price catagory and brand information


let product = []
let first ={
    Name : "Iphone 11",
    Price : "150000",
    Catagory : "Mobile Phone",
    Brand : "Apple"}

first['discount'] = 10

let second =  {
        Name : "lenovo Ideapad",
        Price : "250000",
        Catagory : "laptop",
        Brand : "Lenovo"
    }
let third =  {
        Name : "LG 32",
        Price : "15000",
        Catagory : "Television",
        Brand : "LG"
    }
let fourth = {
    Name : "samsung 192l",
    Price : "150000",
    Catagory : "fridge",
    Brand : "Samsung"
}
let fifth = {
    Name : "samsung galaxy 23",
    Price : "180000",
    Catagory : "Mobile Phone",
    Brand : "Samsung"
}
let sixth = {
    Name : "hp 15",
    Price : "16000",
    Catagory : "Laptop",
    Brand : "HP"
}
let seventh = {
    Name : "dell insp 15",
    Price : "230000",
    Catagory : "Laptop",
    Brand : "Dell"
}
let eighth = {
    Name : "Goldstar G11",
    Price : "1500",
    Catagory : "Shoes",
    Brand : "Goldstar"
}
product.push(first,second,third,fourth)
// product.push(second.Name)(to push single property of object)
console.log(product)

product.unshift(fifth,sixth)

console.log(product)

product.splice(2,0,seventh)

console.log(product)

product.pop();

console.log(product)