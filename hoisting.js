//console.log(xyz); // data decleration vanda psila nai call garyo vaney hoistimg vaninxa  
//var xyz;  // global scope ma sadhai undefined aaunxa
//xyz = 12;

// const user = {
//     name : "sandesh"
// }
// const user1 = user;
// user1.name = "updated name"; // object assign garda jaile pani referencce assign hunxa
// //yeslai spread operator use garera sabai data tanney 
// user1.name = {...user};
// console.log(user1.name); // updated name
// console.log(user.name);// updated name


// let x = -100;
// x >>= 5;
// console.log(x)

// let y = "car" + 23;
// console.log(y);

var userdata = {
    name : "abc",
    email : "abc@nail.com",
    address: " ktm",
    phone : "7554467880"
}
var {fullname : , ...userdata} = userdata // object destruc
console.log(userdata)