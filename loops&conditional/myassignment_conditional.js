//student grade and scholarship eligibility
let marks=89;
let age=17;
if(marks>=90){
    console.log("Grade A");
    if(age<18){
        console.log("eligible for scholarship.");
    }
}else if(marks>70){
    console.log("Grade B");
    if(age>21){
        console.log("try again next year");
    }

}else{
    console.log("show fail");
}
//login system with device check
let user="yes";
let device="desktop";
if(user=="yes"){
    if(device==="mobile"){
        console.log("Mobile Dashboard");
    }
    else{
        console.log("Desktop Dashboard");
    }

}
else{
   console.log("Please login");
}


//Nested Discount Offer
let cartvalue=499;
let user_is_prime=false;
let coupon=true;
if(cartvalue>500){
    if(user_is_prime){
        console.log("20% discount");
    }
    else{
        if(coupon_is_applied)
        console.log("10% discount");
    else
        console.log("5% discount");
    }
}else{
    console.log("no discount");
}


//Temperature Analyzer
let temperature=2;
TimeRanges="afternoon";
if(temperature>35){
    if(TimeRanges=="afternoon"){
        console.log("extreame heat warning");
    }else{
        console.log("hot weather");
    }
}
    else if(temperature>25){
        console.log("normal");
    }
    else{
        console.log("cold");
    }


//Train Ticket Fare Calculator
let destination="metro city";
let passenger="student";
if(passenger=="senior"){
    console.log("40% off");
}
else if(passenger=="student"){
    console.log("50% off");
}
else{
    console.log("full fare");
}

//Smart Greeting App
let language="en";
let time_of_the_day="evening";
switch(language){
    case "en":
        if(time_of_the_day=="morning"){
            console.log("good morning");
        }
        else{
            console.log("good evening");
        }
    case "hi":
        if(time_of_the_day=="morning"){
            console.log("गुड मॉर्निंग");
        }
        else{
            console.log("गुड इवनिंग");
        }
        break;
    case "fr":
        if(time_of_the_day=="morning"){
            console.log("Bonjour");
        }
        else{
            console.log("Bonsoir");
        }
        break;
}



//Currency Converter App
let amount=9000;
let currency="INR";
switch(currency){
    case"USD":
    if(amount>1000){
        console.log("add bonus amount");
    }
    else{
        console.log("standard conversion");
    }
    break;
    case "EUR":
    if(amount>1000){
        console.log("add bonus amount");
    }
    else{
        console.log("standard conversion");
    }
    break;
    case "INR":
    if(amount>1000){
        console.log("add bonus amount");
    }
    else{
        console.log("standard conversion");
    }
    break;
}


//Role and Department Access Control
let role="admin";
let dept="HR";
switch(role){
    case "admin":
    if(dept=="HR"){
        console.log("edit access granted");
    }
    else{
        console.log("view only access");
    }
    case "manager":
        if(dept=="HR"){
            console.log("edit access granted");
        }
        else{
            console.log("view only access");
        }
        break;
    case "employee":
        if(dept=="HR"){
            console.log("view only access");
        }
        else{
            console.log("view only access");
        }
        break;
}


//Mobile Plan Chooser
let mobilePlan="premium";
let userType="student";
switch(mobilePlan){
    case "basic":
    if(user=="student"){
        console.log("extra student discount applied");
    }
    else{
        console.log("standard pricing applied");
    }
    case "standard":
        if(userType=="student"){
            console.log("extra student discount applied");
        }
        else{
            console.log("standard pricing applied");
        }
        break;
    case "premium":
        if(userType=="student"){
            console.log("extra student discount applied");
        }
        else{
            console.log("standard pricing applied");
        }
        break;
}


//Dynamic Offer Display
let cartvalue1=9999;
primestatus="yes";
if(cartvalue1>1000){
if (primestatus == "yes") {
    console.log("free delivery and 20% discount");
} else if (cartvalue1 > 500) {
    if (primestatus == "yes") {
        console.log("10% discount");
    } else {
        console.log("delivery charge is 50 rupees ");
    }
} else {
    console.log("free delivery and 10% discount");
}
}

//Login System with 2-Step Verification
let username="sai";
let password1="133sai";
let otp="4135s"
if(username==="sai" && password1==="133sai"){
    console.log("login successful");
}else if(otp=="4135s"){
    console.log("invalid otp");
}
else{
    console.log("invalid credentials");


}


//Theme Changer with Auto Detection
let theme="auto";
let time ="morning";
if(theme==="light"){
    console.log("light theme applied");
}
else if(theme==="dark"){
    console.log("dark theme applied");
}
else if(theme==="auto"){
    if(time==="morning"){
        console.log("light theme applied");
    }else{
        console.log("dark theme applied");
    }
}

//Course Recommendation System
let userage=12;
area_of_interest="coding";
if(userage<18){
    console.log("try for bootcamp");
}
else{
    switch(area_of_interest){
        case "coding":
            console.log("full stack development course");
            break;
        case "design":
            console.log("UI UX design course");
            break;
        case "marketing":
            console.log("digital marketing course");
            break;
        default:
            console.log("explore other options");
    }

}



//Language and Region Selector
let language1="hi";
let region="india";
switch(language1){
    case "en":
        if(region==="india"){
            console.log("hello namaste");
        }
        else{
            console.log("others");
        }
        break;
    case "hi":
        if(region==="india"){
            console.log("नमस्ते");
        }
        else{
            console.log("others");
        }
        break;
    case "fr":
        if(region==="india"){
            console.log("bonjour");
        }
        else{
            console.log("others");
        }
        break;
    case "es":
        if(region==="india"){
            console.log("hola");
        }
        else{
            console.log("others");
        }
        break;
}
//delivery time estimator
let producttype="express";
let citytype="metro";
switch(producttype){
    case "fragile":
        if(citytype==="metro"){
            console.log("2 days");
        }
        else if(citytype==="non-metro"){
            console.log("4 days");
        }
        break;
    case "express":
        if(citytype==="metro"){
            console.log("1 day");
        }
        else if(citytype==="non-metro"){
            console.log("2 days");
        }
        break;
    case "standard":
        if(citytype==="metro"){
            console.log("3 days");
        }
        else if(citytype==="non-metro"){
            console.log("5 days");
        }
        break;
    default:
        console.log("select type");
}


//Bill Splitter with Promo Logic
let total_bill_amount=1000;
let num_of_people=9;
let promocode ="PERCENT10";
if(promocode==="FLAT50"){
    total_bill_amount =total_bill_amount-50;
}
else if(promocode==="PERCENT10"){
    total_bill_amount =total_bill_amount*0.90;
}
else{
    console.log("no discount");
}
console.log(total_bill_amount);
console.log(total_bill_amount/num_of_people);

//Multi-Currency Checkout with Promo
let amount1=700;
let currency1="EUR";
promocode="FLAT100";
switch(currency1){
    case "INR":
        if(promocode==="FLAT100"){
            amount1=amount1-100;
        }
        else{
            amount1=amount1*0.90;
        }
    break;
     case "USD":
        if(promocode==="FLAT100"){
            amount1=amount1-100;
        }
        else{
            amount1=amount1*0.90;
        }
    break;
     case "EUR":
        if(promocode==="FLAT100"){
            amount1=amount1-100;
        }
        else{
            amount1=amount1 *0.90;
        }
    break;
    default:
        console.log("select any currency");
}
console.log(amount1);


//Age Group Greeting
let agegroup=11;
let gender="female";
if(agegroup<13){
    if(gender==="male"){
        console.log("hey young boy");
    }else{
        console.log("hey little girl");
    }
}else if(agegroup<19){
    console.log("hello teen");
}else{
    console.log("welcome adult");
}


//Student Result and Feedback Generator
let mark=345;
let section="B";
if(mark>90){
    if(section==="A"){
         console.log("outstanding in section A");
    }else{
        console.log("excellent in section B");
    }
}else if(mark>70){
    console.log("good performance");
}
else{
    console.log("needs improvement");
}