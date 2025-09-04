let l=0;
for(i=1;i<=5;i++)
{
    l+=i;
}
console.log(l);

let d=5;
f=0;
while(d>0)
{
    f+=d;
    d--;
}
console.log(f);


let usertable=10;
for(let i=1;i<=usertable;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(i+"*"+j+"="+(i*j));
    }
}




let r=5;
for(let i=1;i<=5;i++)
{
    let z="";
    for(let j=1;j<=i;j++)
    {
        z+=j+" ";
    }
    console.log(z);
}




let k=1;
for(let i=1;i<=5;i++)
{
    let m="";
    for(let j=1;j<=i;j++)
    {
        m+="* ";
    }
    console.log(m);
}


let x=1
for( let i=1;i<=5;i++){
    let x="";
    for(k=1;k<=5-i;k++){
        x+=" ";
    }
    for(let j=1;j<=i;j++){
        x+="* ";
    }
    console.log(x);
}
