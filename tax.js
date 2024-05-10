
const yearly_income = 5000000;
if (yearly_income <= 500000){
    var  tax_amount = (yearly_income*0.01);
    var salary_after_tax = yearly_income-tax_amount;

 }
else if (yearly_income <= 700000){
    var  tax_amount = (5000+(yearly_income-500000)*0.15);
    var salary_after_tax = yearly_income-tax_amount;

}
else if (yearly_income <= 1000000){
    var  tax_amount = (5000+30000+(yearly_income-700000)*0.2);
    var salary_after_tax = yearly_income-tax_amount;

}
else if (yearly_income <= 2000000){
    var  tax_amount = (5000+30000+60000+(yearly_income-1000000)*0.25);
    var salary_after_tax = yearly_income-tax_amount;
}
else if (yearly_income <= 4000000){
    var  tax_amount = (5000+30000+60000+250000+(yearly_income-2000000)*0.3);
    var salary_after_tax = yearly_income-tax_amount;

}
else if (yearly_income > 4000000){
    var tax_amount = (5000+30000+60000+250000+600000+(yearly_income-4000000)*0.36);
    var salary_after_tax = yearly_income-tax_amount;

 }
     console.log("the net yearly salary is ", salary_after_tax);
     console.log("The net monthly salary is ", salary_after_tax/12);
     console.log("Tax to be paid yearly is ", tax_amount);
     console.log("Tax to be paid monthly", tax_amount/12);