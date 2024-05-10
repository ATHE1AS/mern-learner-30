// Array is a collection of data of any type
//ARRAY are always enclosed with []
//All the elements are being seperated by comma
//All the elements are in index value pair
//Indexes are auto generated and always numeric value starting from 0
//We can collect any data types

let employee_1 = ["sundar acharya", "abc@gmail.com", "pokhara", "+977 9765467880"]
console.log(employee_1[0])
console.log(employee_1[1])
console.log(employee_1[2])
console.log(employee_1[3])

//Single Dimensional Array
//Multi Dimensional Array

let all_employee =
                 [["sundar acharya", "abc@gmail.com", "pokhara", "+977 9765467880"],
                 ["sundar achary", "abc@gmail.co", "pokhar", "+977 765467880"],
                 ["sundar aharya", "abc@gail.com", "pokhra", "+977 976567880"]]
console.log(all_employee[1][1]);
//Object data always contains key value pair
//Keys are custom defined
//Keys can be alphanumeric data
let user_1 = {
    name : "person name",
    email: "name@abc.com",
    address: "butwal",
    phone: "+977 6567657656"
}
console.log(user_1.name)
console.log(user_1['name'])

let user_2 = {
    name : {   first: sundar,
        middle: null,
        last: acharya 
    },
   
    email: "name@abc.com",
    address: "butwal",
    phone: "+977 6567657656"
}
console.log(user_2.first)

all_user =[{name1: "user one", email1: "xyz@abc.com", address:"morang", phone:" 9865433", designation: "Ceo"},
            {name1: "user one", email1: "xyz@abc.com", address:"morang", phone:" 9865433", designation: "Ceo"}
            ]
console.log(all_user[1.designation])
console.log(all_user[1]["designstion"])

// Insert opereation
//default is always start from last
let all_employee1=[]
all_employee1.push("populate at last"); //0
all_employee1.push("Insert this at 1");
all_employee1.unshift("alwaya at 0"); // 0, existing 0 => 1, 1=>2

all_employee1[1] = "I am repkaced"; // replace existing

all_employee1.splice[1,1,"Insert forcefully"] // 0,1,2 ====> 1-2 between any data insert (bich ma value insert garda ra value insert garda existing value lai shift gardinxa)
                                           // [1-index, 1-how many data, ""-data]
all_employee1[9] = "random idex value insert";

//read
const first = all_employee1.shift();
const last = all_employee1.pop();
const index = all_employee1.splice(1,1) // (1- indesx value, 2 - kati wota index value samma)(array ma pani change hunxa)
const index2 = all_employee1.slice(1,5) // (1 dekhi 4 index samma ko data read garyo array ma kei farak pardinna)

var arr = [1, 2 , 3 ,4 ,45,89];
arr.pop([0]);
console.log(arr);
arr.shift(1);
console.log(arr);
arr.slice(4);
console.log(arr);

var a =
{
    name: "samir baniya",
    age: 27,
    phone : 98567890,
    address : "bhalwari"
    }
console.log(a);
