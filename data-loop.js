const product = [
    {name:"product one", price : 100, discount : 10},
    {name: "product two", price : 2000 , discount : 13},
    {name: "product three", price : 34000 , discount : 15}
]
product[5] = {name: "product five", price: 2500, discount: 18}


console.log("product name", product[0].name)
console.log("product price:", product[0].price)
console.log("product discount", product[0].discount, "%")
var after_discount = product[0].price-product[0].price*product[0].discount/100
console.log("after discount ", after_discount)
console.log("-----------------------------------------------")

console.log("product name", product[1].name)
console.log("product price:", product[1].price)
console.log("product discount", product[1].discount, "%")
var after_discount = product[1].price-product[1].price*product[1].discount/100
console.log("after discount ", after_discount)
console.log("-----------------------------------------------")

console.log("product name", product[2].name)
console.log("product price:", product[2].price)
console.log("product discount", product[2].discount, "%")
var after_discount = product[2].price-product[2].price*product[2].discount/100
console.log("after discount ", after_discount)
console.log("-----------------------------------------------")

// For the repeating code like above we acn use for-loop just like below

// let size = product.length;
// for (let i=0; i < size; i++){
//     console.log("product name", product[i].name)
// console.log("product price:", product[i].price)
// console.log("product discount", product[i].discount, "%")
// var after_discount = product[i].price-product[i].price*product[i].discount/100
// console.log("after discount ", after_discount)
// console.log("-----------------------------------------------")

// }

let size = product.length;
for (let i=0; i < size; i++){
    if (product[i]){
    console.log("product name", product[i].name)
    console.log("product price:", product[i].price)
    console.log("product discount", product[i].discount, "%")
    var after_discount = product[i].price-product[i].price*product[i].discount/100
    console.log("after discount ", after_discount)
    console.log("-----------------------------------------------")
    }
}

 // for in loop jaile pani index read garna use hunxa
 //for of loop index ko sabai value chaiyema

for (let i in product){
    console.log("product name", product[i].name)
    console.log("product price:", product[i].price)
    console.log("product discount", product[i].discount, "%")
    var after_discount = product[i].price-product[i].price*product[i].discount/100
    console.log("after discount ", after_discount)
    console.log("-----------------------------------------------")
}
for (let elm of product){
    if (elm){
    console.log("product name", product[i].name)
    console.log("product price:", product[i].price)
    console.log("product discount", product[i].discount, "%")
    var after_discount = product[i].price-product[i].price*product[i].discount/100
    console.log("after discount ", after_discount)
    console.log("-----------------------------------------------")
    }
}

//create an array of students having namr,email,marks obtained as an object data
//store at least 10 student data on that array
//consider 500 as a total score
//print each student percentage and division

let student = [
    {name:"abc",email:"abc@xyz",marks_obtained:"255"},
    {name:"def",email:"def@xyz",marks_obtained:"381"},
    {name:"ghi",email:"ghi@xyz",marks_obtained:"401"},
    {name:"jkl",email:"jkl@xyz",marks_obtained:"455"},
    {name:"mno",email:"mno@xyz",marks_obtained:"481"},
    {name:"ram",email:"ram@xyz",marks_obtained:"155"},
    {name:"hari",email:"hari@xyz",marks_obtained:"166"},
    {name:"soniya",email:"soniya@xyz",marks_obtained:"201"},
    {name:"jack",email:"jack@xyz",marks_obtained:"333"},
    {name:"rose",email:"rose@xyz",marks_obtained:"378"}
]
for (let i in student){
    var percentage = product[i].marks_obtained/500*100;
    if (percentage >= 80){
        console.log("Distinction")}
        else if (percentage>= 60){
        console.log("first division")
        }
        else if (percentage >= 40){
            console.log("second division")
        }
        else if (percentage < 35){
            console.log("you are failed")
        }
    }
