/**
 * if-else
 * else-if
 * switch case
 * loop
 * 
 */

const fullname = "";
if (fullname !== ""){ //or if (fullname) {
    //body 
    //if expression is true
    console.log("your full name is", fullname);
}
else {
    //if not true
    //is optional
    console.log("Name is empty");
}


// create a JS codeblock to calculate and division based on percentage
//you have a variable storing marks obtained
//the value should be less than 500 and greater than 0
//calculate percentage if total score is 500
//calculate division based on percentage
//for division consider
/**
 * percentage >= 80, first division with distinction
 * percentage >=60,<80 , first division
 * >=45,<60, second division
 * >=35 , <45, third division
 * <35 , sorry you are failed
 */

let marks_obtained = 399;
if (marks_obtained >= 0 && marks_obtained<=500){
    let percentage = (marks_obtained / 500) * 100;
    if (percentage>=80){
    console.log("first division with distinction");
    }
    else if (percentage>= 60){
        console.log("second division");
    }
    else if (percentage>= 35){
        console.log("third division");
    }
    else if (percentage<35){
        console.log("you are failed");
    }
}
else {
    console.log("you have enterd wrong marks");
}



//Switch-Case
// case vitra case nesting hudainna tara case vitra switch case nesting huna sakxa

//create a day variable storing name of any day from sunday to saturday
//print if the day is saturday or sunday ===>holiday
//if day is friday===> weekend
//if day is another day ===> weekday

var day = "sunday";
switch (day){
    case "saturday":
    case "sunday":
        console.log("Holiday");
        break;
    case "friday":
        console.log("Weekend");
        break;
    default:
        console.log("Weekday");
        break;
}