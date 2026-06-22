const products = [
{
id:1,
name:"Elegant Dress",
price:49.99,
category:"women",
image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
},
{
id:2,
name:"Business Suit",
price:69.99,
category:"men",
image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
},
{
id:3,
name:"Kids Outfit",
price:29.99,
category:"children",
image:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800"
},
{
id:4,
name:"Arabic Collection",
price:39.99,
category:"children",
image:"https://images.unsplash.com/photo-1621878166843-d060a5ff51ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGlzbGFtaWMlMjBjbG90aGVzJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D"
},
{
id:5,
name:"Classic Jacket",
price:89.99,
category:"men",
image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
},
{
id:6,
name:"Children Set",
price:39.99,
category:"children",
image:"https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800"
},
{
id:7,
name:"Winter Collection",
price:79.99,
category:"women",
image:"https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
id:8,
name:"T-Shirt",
price:39.99,
category:"men",
image:"https://images.unsplash.com/photo-1693443688057-85f57b872a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
},
{
id:9,
name:"Winter Coat",
price:59.99,
category:"men",
image:"https://images.unsplash.com/photo-1619603364904-c0498317e145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
},
{
id:10,
name:"Winter Collection",
price:79.99,
category:"men",
image:"https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
},
{
id:11,
name:"Children Collection",
price:29.99,
category:"children",
image:"https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlcyUyMGNoaWxkcmVufGVufDB8fDB8fHww"
},
{
id:12,
name:"Classic Collection",
price:79.99,
category:"men",
image:"https://media.istockphoto.com/id/2244350955/photo/smiling-asian-businessman-holding-a-smartphone-looking-away-in-a-modern-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=6iiKqiIjoNDbv4FZrLlOweb4DkjdB_an70m3Zz21_JI="
},
{
id:13,
name:"Spring Collection",
price:29.99,
category:"children",
image:"https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3RoZXMlMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D"
},
{
id:14,
name:"Summer Collection",
price:59.99,
category:"women",
image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800"
},
{
id:15,
name:"Winter Jacket",
price:49.99,
category:"men",
image:"https://media.istockphoto.com/id/1300962117/photo/young-handsome-guy-in-a-warm-knitted-clothes-against-a-background-of-black-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=_zlSfLrpAsFdF68r42lOqQF7nkqRe4nu0aNwYa6-GLk="
},
{
id:16,
name:"Muslim Collection",
price:79.99,
category:"women",
image:"https://images.unsplash.com/photo-1623691595244-9467aa22dbc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG11c2xpbSUyMHdvbWFufGVufDB8fDB8fHww"
},
{
id:17,
name:"Office Collection",
price:69.99,
category:"women",
image:"https://plus.unsplash.com/premium_photo-1681489847451-0eaec69a0214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG11c2xpbSUyMHdvbWFufGVufDB8fDB8fHww"
},
{
id:18,
name:"Office Collection",
price:79.99,
category:"men",
image:"https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww"
},
{
id:19,
name:"White Dress",
price:39.99,
category:"children",
image:"https://images.unsplash.com/photo-1684244160171-97f5dac39204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXMlMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D"
},
{
id:20,
name:"Summer Collection",
price:59.99,
category:"men",
image:"https://media.istockphoto.com/id/2157291747/photo/happy-man-with-travel-bag-text-messaging-on-cell-phone-while-walking-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=R682PImE6RKXUcSJakUKCq7sikMMz4FdqPnDnVPJXWc="
},
{
id:21,
name:"Women Scarf",
price:9.99,
category:"women",
image:"https://images.unsplash.com/photo-1619545307432-9fc73f8135ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2xpbSUyMHdvbWFufGVufDB8fDB8fHww"
},
];

function renderProducts(list = products){

const container = document.getElementById('products');
if(!container) return;

container.innerHTML = list.map(product => `
<div class="card ${product.category}">

<div class="product-badge">NEW</div>

<button class="wishlist">❤</button>

<img src="${product.image}" alt="${product.name}">

<div class="card-content">

<h3>${product.name}</h3>

<div class="rating">★★★★★</div>

<div class="card-footer">

<span class="price">$${product.price.toFixed(2)}</span>

<button class="add-cart"
onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

</div>

</div>
`).join('');
}

function addToCart(id){

const product = products.find(p => p.id === id);

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const existing = cart.find(item => item.id === id);

if(existing){
existing.quantity += 1;
}else{
cart.push({
...product,
quantity:1
});
}

localStorage.setItem('cart', JSON.stringify(cart));

updateCartCount();

showToast(`${product.name} added to cart`);
}

// 🔥 better than alert
function showToast(message){

let toast = document.createElement('div');

toast.innerText = message;

toast.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
background:#8b5cf6;
color:white;
padding:12px 18px;
border-radius:10px;
z-index:9999;
`;

document.body.appendChild(toast);

setTimeout(()=>toast.remove(),1500);
}

function updateCartCount(){

const cart = JSON.parse(localStorage.getItem('cart')) || [];

const total = cart.reduce((sum,item)=>sum + item.quantity,0);

const counter = document.getElementById('cartCount');

if(counter){
counter.innerText = total;
}
}

function filterProducts(category,btn){

document.querySelectorAll('.filters button')
.forEach(b => b.classList.remove('active'));

if(btn) btn.classList.add('active');

if(category === 'all'){
renderProducts();
return;
}

const filtered = products.filter(p => p.category === category);

renderProducts(filtered);
}

document.getElementById('searchInput')
.addEventListener('input', (e)=>{

const value = e.target.value.toLowerCase();

const filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

renderProducts(filtered);
});

renderProducts();
updateCartCount();