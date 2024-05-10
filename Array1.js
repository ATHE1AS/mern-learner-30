let computer = [" brand_name", "Processor_name", "Ram_size", "storage_size"]
console.log(computer[1])

//Multi Dimensional Array
let allcomputer = [["Brand1", "processor1", "ram_size1"],["Brand2", "processor2", "Ram_size2"],
                ["Brand2", "processor2", "ram_size2"]];
console.log(allcomputer[1][2]);


//let phone = ["apple", "15", "128", "oliz store", "10", "20"]

let phone = {
    Brand : "apple",
    model : "13",
    storage : "128",
    store : "oliz store"
}
console.log(phone.store);

let phone1 = { 
    store: { store1 : "oliz store",
      address1 : "ktm",
      phoneno1 : "98765543"}, // object vitra object garauda vitra ko object lai pani yeuta unique key provide garna parxxa
    Brand1 : "apple",
    model1 : "13",
    storage1 : "128"
}
console.log(phone1.store.address1);
   

let rnum = []
rnum.push(23);
console.log(rnum);
rnum.push(45);  // push ley paxadi bata peldinxa
console.log(rnum);
rnum.unshift(55);  //unshift le agadi bata peldinxa
console.log(rnum);
rnum.splice(1,0,87);//(1-index, 0-removable no. of elements, 87- added element after index 1)
console.log(rnum)
rnum.splice(1,1);
console.log(rnum);
rnum.shift();
console.log(rnum);
rnum[0]= 45;
console.log(rnum);
rnum.pop();
console.log(rnum);


let num1 = [1,2,3,4,54]
console.log(num1);
console.log(num1.slice(1,3)); // index 1 dekhi 3 samma slice garxa tara value chai 3-1 ko dinxa [original array ma kei farak pardinna yesle only read garxa]


