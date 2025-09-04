
function currentBill(units){
    let totalBill=1;
    if(units<=50)
        totalBill=units*1;
    else if(units>50 && units<=100)
        totalBill=units*2;
    else if(units>100 && units <=150)
        totalBill=units*3;
    else if(units>150 && units <=200)
        totalBill=units*4;
    else if(units>200){
        totalBill=units*5;
        totalBill=totalBill*0.90;
    }
    return totalBill;
}
let Bill = currentBill(210);
console.log(Bill);





function FizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } 
    }
}
FizzBuzz(100);

function calculateWeeklySalary(hoursWorked, hourlyRate){
    let weeklySalary = hoursWorked * hourlyRate;
    if (hoursWorked > 40) {
        let overtimeHours = hoursWorked - 40;
        let overtimeRate = hourlyRate * 1.5;
        weeklySalary += overtimeHours * overtimeRate;
    }
    return weeklySalary;
}
function applyBonus(salary, bonusPercentage){
    let bonus = salary * (bonusPercentage / 100);
    return salary + bonus;
}
function displaySalary(employeeName,salary){
    console.log(`The total salary of ${employeeName} is ${salary}`);
}

displaySalary("Akshith", calculateWeeklySalary(45, 20));
displaySalary("Raghu", applyBonus(calculateWeeklySalary(45, 20), 10)); 


function twitter(a){
    let c = 0;
    if(a.length <50)
        c = 50 - a.length;
    return c;
}
twitter(prompt("comment on this tweet"))


function captialAlp(name){
   name= name.trim();
   if(name.length === 0) return "";
   name= name.charAt(0).toUpperCase() + name.slice(1);
   console.log(name);
}
//console.log(captialAlp(prompt("enter your name")));
captialAlp("sai")

let data = function(a){
 console.log(a);
}
data("sai");

const add = (a, b) => a + b;
console.log(add(2, 3)); 

