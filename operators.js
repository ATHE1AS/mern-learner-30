/*
1. Arithmetic operator [+ , - , * , / , % (Modules)]
2. Increment and decrement operator [++ (increase by 1), -- (decrease by 1)]
a++ [post ]
++aa [pre ]
3. Assignment operator [=, +=, -=, *=, %=]
4. string / concatination operator [+]
5. Template literals [ '' => ${}]
6. Comparison operator [ < , >, <=, >=, ==, !==, ===, !==]
7. Logical operator [&&, ||, ! ]
8. Conditional / Ternary Operator[(exp ? true : false)]
9. Null colleaching[??]
10. Object Destructure
11. Spread OPerator
12. Rest Operator

*/
 let a = 10; //a=10
 console.log(a++); // (a = 10 (paila print garxa tes paxi increment garxa)
 console.log(++a); //(a = 13 , paila increment garxa ani balla print garxa)

a = a +2 ;
a+= 2;

let x= 23;
let y = "23";
const z = x + y;
console.log(z) // output = 2323

let name = "sundar";
// let html = "Dear" + name + "<Br>"




a = 10;
b = "10";
console.log(a < b); 
console.log(a > b);
console.log(a == b); // [== only compares the value]
console.log(a === b); // [===, compares bith value and data types]

const userRegister = {
    role : "student"
}
((userRegister.role !== "admin") && ())

let role = (userRegister.role === "admin") ? "admin" : "test";
let role = (userRegister.role === "admin") ? "admin" : (
    (userRegister.role )
);
const userdata= {
    name : "abc",
    email : "abc@nail.com",
    address: " ktm",
    phone = 7554467880
}
let {name : fullname, address, ...remaining} = userdata // object destruct

const adminuser = {  // spread operator
    ...userdata,
    role : "admin"

}