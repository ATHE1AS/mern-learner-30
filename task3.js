//Calculate tax to be paid monthly and yearly with net income
//consider a software developer earns yearly npr 5000000
//the tax bracket is as follows
/**
 * for the first npr 500000 ,1%
 * for next npr 200000, 15%
 * for next 300000, 20%
 * for next 1000000, 25%
 * for next 2000000, 30%
 * and for any surplus amount , 36%
 */

//calculate 
//net salary yearly
//net salary monthly
//tax to be paid yearly
//tax to be paid monthly

const yearly_income = 5000000;
if (yearly_income <= 500000){
    const  tax_amount = (yearly_income*0.01);
    const salary_after_tax = yearly_income-tax_amount;
    console.log("The net yearly salary is ", salary_after_tax);
    console.log("The net monthly salary is ", salary_after_tax/12);
    console.log("Tax to be paid yearly is ", tax_amount);
    console.log("Tax to be paid monthly", tax_amount/12);
}
else if (yearly_income <= 700000){
    const  tax_amount = (500000*0.01+(yearly_income-500000)*0.15);
    const salary_after_tax = yearly_income-tax_amount;
    console.log("the net yearly salary is ", salary_after_tax);
    console.log("The net monthly salary is ", salary_after_tax/12);
    console.log("Tax to be paid yearly is ", tax_amount);
    console.log("Tax to be paid monthly", tax_amount/12);
}
else if (yearly_income <= 1000000){
    const  tax_amount = (500000*0.01+200000*0.15+(yearly_income-700000)*0.2);
    const salary_after_tax = yearly_income-tax_amount;
    console.log("The net yearly salary is ", salary_after_tax);
    console.log("The net monthly salary is ", salary_after_tax/12);
    console.log("Tax to be paid yearly is ", tax_amount);
    console.log("Tax to be paid monthly", tax_amount/12);
}
else if (yearly_income <= 2000000){
    const  tax_amount = (500000*0.01+200000*0.15+300000*0.2+(yearly_income-1000000)*0.25);
    const salary_after_tax = yearly_income-tax_amount;
    console.log("The net yearly salary is ", salary_after_tax);
    console.log("The net monthly salary is ", salary_after_tax/12);
    console.log("Tax to be paid yearly is ", tax_amount);
    console.log("Tax to be paid monthly", tax_amount/12);
}
else if (yearly_income <= 4000000){
    const  tax_amount = (500000*0.01+200000*0.15+300000*0.2+1000000*0.25+(yearly_income-2000000)*0.3);
    const salary_after_tax = yearly_income-tax_amount;
    console.log("The net yearly salary is ", salary_after_tax);
    console.log("The net monthly salary is ", salary_after_tax/12);
    console.log("Tax to be paid yearly is ", tax_amount);
    console.log("Tax to be paid monthly", tax_amount/12);
}
else if (yearly_income > 4000000){
    const  tax_amount = (500000*0.01+200000*0.15+300000*0.2+1000000*0.25+2000000*0.3+(yearly_income-4000000)*0.36);
    const salary_after_tax = yearly_income-tax_amount;
    console.log("The net yearly salary is ", salary_after_tax);
    console.log("The net monthly salary is ", salary_after_tax/12);
    console.log("Tax to be paid yearly is ", tax_amount);
    console.log("Tax to be paid monthly", tax_amount/12);
}