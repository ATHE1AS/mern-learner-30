

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
    console.log("Student Name: ", student[i].name)
    console.log("Student Email:", student[i].email)
    console.log("Marks Obtained by Student:", student[i].marks_obtained)
    var percentage = student[i].marks_obtained/500*100;
    console.log("Your percentage is :", percentage)
    if (percentage >= 80){
        console.log("Division : Distinction")}
        else if (percentage>= 60){
        console.log("Division : first division")
        }
        else if (percentage >= 40){
            console.log("Division : second division")
        }
        else if (percentage < 35){
            console.log("You are failed")
        }
        console.log("--------------------------------------")
    }
