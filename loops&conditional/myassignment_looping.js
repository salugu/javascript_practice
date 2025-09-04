let bullet=document.getElementById("bullet");
let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
for(let i=0;i<products.length;i++){
    bullet.innerHTML += `<li>${products[i]}</li>`;
}


