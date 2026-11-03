var products=[
{name:"Forex Beginners Course",price:500,image:"forex.jpg",desc:"Learn forex from scratch, 4 weeks"},
{name:"Crypto Trading Signals",price:300,image:"crypto.jpg",desc:"Daily crypto signals on WhatsApp"},
{name:"Stock Market Mentorship",price:1000,image:"stock.jpg",desc:"One on one mentorship, 2 months"},
{name:"Trading E-book",price:150,image:"ebook.jpg",desc:"50 trading strategies"},
{name:"Advanced Trading Course",price:750,image:"trading.jpg",desc:"Advanced strategies"}
];
function displayProducts(){
var c=document.getElementById('productList');
if(!c)return;
c.innerHTML="";
for(var p=0;p<products.length;p++){
c.innerHTML+='<div class="card show"><img src="./images/'+products[p].image+'" alt="'+products[p].name+'" style="width:100%;height:200px;object-fit:cover;"><h3>'+products[p].name+'</h3><p>'+products[p].desc+'</p><p>Price: R'+products[p].price+'</p></div>';
}
}
displayProducts();
var headers = document.querySelectorAll('.accordion-header');
for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', function() {
    var c = this.nextElementSibling;
    if (c.style.display === "block") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }
  });
}
function openTab(id){
var t=document.getElementsByClassName('tab-content');
for(var j=0;j<t.length;j++){t[j].style.display="none";}
document.getElementById(id).style.display="block";
}
function showModal(){
document.getElementById('modal').style.display="block";
}
function hideModal(){
document.getElementById('modal').style.display="none";
}
if (document.getElementById("map")) {
  var m = L.map("map").setView([-26.2041, 28.0473], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(m);
  L.marker([-26.2041, 28.0473]).addTo(m).bindPopup("Money Making Machine");
}