let products=[
    {
        img:"https://tse3.mm.bing.net/th/id/OIP.m4cAv5M-cb-V45Tbuv6ZsQHaFC?pid=Api&P=0&h=180 ",
        name:"laptop",
        price:40000,
        instock:false,
    },
    {
        img:"https://tse2.mm.bing.net/th/id/OIP.mNaaJnjxNQ5hgXEaYrnG-QHaFn?pid=Api&P=0&h=180 ",
        name:"computer",
        price:30000,
        instock:false,
    },
    {
        img:"https://tse2.mm.bing.net/th/id/OIP.gt7skxQSCOrtDvpDIGIugQHaE7?pid=Api&P=0&h=180 ",
        name:"mobile",
        price:20000,
        instock:true,
    },
    {
        img:"https://tse4.mm.bing.net/th/id/OIP.f4igTZm0GAwTTz4Y2dX2VgHaE1?pid=Api&P=0&h=180 ",
        name:"watch",
        price:10000,
        instock:true,
    }
]
let productcontainer=document.getElementById("productcontainer");
productcontainer.innerHTML="";
for(let i=0;i<products.length;i++){
    let product=products[i];
    let div=document.createElement("div");
    div.className=" card w-70 border p-5 m-3 rounded shadow-lg flex-col items-center justify-center";
    div.innerHTML=`
    <img src="${product.img}"alt="${product.name}class="w-[100px] h-[100px]">
    <p class=> ${product.name}</p>
    <p class=>Price:${product.price}</p>
    <div>
    <button class="text-white bg-sky-600 px-4 py-2 rounded  ${product.instock ? " ":"opacity-50 cursor-not-allowed"}">Add to Cart</button>
    <button class="text-white bg-green-700 px-4 py-2 rounded" >Buy Now</buttBuy Now
    `;


    productcontainer.appendChild(div);
}


