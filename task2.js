//create utility bill for electricity
//assume a household consumes 350 units of electricity in a month
//calculate total bill to be paid
// consider the following
/**
 * total unit consumed is less tha 20 , a lumsum amont of rs 80 has to be paid
 * for next 20 unit , the rate is npr 5/unit
 * for next 30 unit the rate is 7/unit
 * for next 50 unit the rate is npr 10/unit
 * for next 100 unit the rate is npr 18/unit
 * for above all the rate is nper 20/unit
 */

let unit_consumed=350;
if (unit_consumed<=20){
    const total_bill = 80;
    console.log(total_bill);
}
else if (unit_consumed<=40){
    const total_bill = (80+(40-20)*5);
    console.log(total_bill);
}
else if (unit_consumed<=70){
    const total_bill = (80+(40-20)*5+(70-40)*7);
    console.log(total_bill);
}
else if (unit_consumed<=120){
    const total_bill = (80+(40-20)*5+(70-40)*7+(120-70)*10);
    console.log(total_bill);
}
else if (unit_consumed<=220){
    const total_bill = (80+(40-20)*5+(70-40)*7+(120-70)*10+(220-120)*18)
    console.log(total_bill);
}
else if (unit_consumed>220){
    const total_bill = (80+(40-20)*5+(70-40)*7+(120-70)*10+(220-120)*18+(unit_consumed-220)*20);
    console.log(total_bill);
}


