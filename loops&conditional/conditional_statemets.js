let username="sai charan";
let pwd="sai";
if(username=="sai charan" && pwd=="sai"){
    console.log("wel come to page");

}
else{
    console.log("login credintials are incorrect");
}




let ticketprice=150;
if(ticketprice==150){
    console.log("balcony")
}
else if(ticketprice==200)
{
    console.log("uppercase")

}
else
{
    console.log("lowercase")
}





let marks=34;
if(marks>=90){
    console.log("grade A")
}
else if(marks>=80){
    console.log("grade B")
}
else if(marks>=70){
    console.log("grade C")
}
else if(marks>=60){
    console.log("grade D")
}
else{
    console.log("fail")
}



let cartvalue=12;
if(cartvalue>=400){
    console.log("applies 50% discount ")
}
else{
    console.log("applies no discount ")
}


let  num=0;
if(num>0){
    if(num%2===0){
        console.log("+ve even number")
    }
    else{
        console.log("+ve odd number ")
    }
}
else{
    if(num%2===0){
        if(num==0)
        {
          console.log("Netural number")
        }
        else{
            console.log("-ve even number")
        }

    }
    else{
        console.log("-ve odd number")
    }
}

let a=0;
if(a%2==0){
    console.log("even")
}
else{
    console.log("odd")
}



let item="net banking";//prompt("enter the mode of payment")
switch(item){
    case "net banking":
        console.log("payment mode in net banking")
        break;
    case "cash":
        console.log("payment mode in cash")
        break;
    default:
        console.log("payment mode in credit card")

}