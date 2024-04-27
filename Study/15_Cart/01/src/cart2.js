let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}
calculation();

let generateCartIems = () => {
  if(basket.length !==0){
    return (shoppingCart.innerHTML= basket.map((x)=>{
      let{id, item} = x;
      let search = shopItems.find(y => y.id == id);
      return `
      <div class="cart-item">
        <img width="100" src=${search.img} alt="" />
        <div class="details">
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${search.name}</p>
              <p class="cart-item-price">$ ${search.price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
          <h3>$ ${item * search.price}</h3>
        </div>
      </div>
      `;
    }).join(""))
  } 
  else {
    shoppingCart.innerHTML="";
    label.innerHTML=`
      <h2>Cart is empty </h2>
      <a href="index.html">
         <button class="HomeBtn"> Back to home </button>
      </a>
    `;
  }
}
generateCartIems();

function increment(id){
  let selectedId = id;
  let search = basket.find( x => x.id ===selectedId.id);  // undefined는 localStorage 에 없다는 의미
  if(search === undefined) {
    basket.push({
      id:selectedId.id,
      item :1
    })
  } else {
    search.item +=1;
  }
  console.log(basket)
  update(selectedId.id)
  localStorage.setItem('data', JSON.stringify(basket))
}

function decrement(id){
  let selectedId = id;
  let search = basket.find( x => x.id ===selectedId.id);
  // 0이하로는 감소되지 않도록 해야 한다
  if(search=== undefined) return
  else if( search.item ===0) return
  else {
    search.item -=1;
  }
  update(selectedId.id);
  basket = basket.filter((x)=>x.item !==0)
  generateCartIems();
  localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id)=>{
  let search = basket.find(x =>x.id ===id);
  document.getElementById(id).innerHTML= search.item;
  calculation();
  TotalAmount();
}

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter(x => x.id !== selectedItem.id);
  generateCartIems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
}

let TotalAmount = () => {
  if(basket.length !== 0) {
    let amount = basket.map(x => {
      let {item, id} = x;
      let search = shopItems.find(y => y.id == id) || [];
      return item * search.price;
    }).reduce((x, y) => x+y, 0);
    label.innerHTML = `
      <h2>Total price : ${amount}</h2>
      <button class="checkout">Check out</button>
      <button class="removeAll" onclick="clearCart()">Clear cart</button>
    `;
  } else return;
}
TotalAmount();

let clearCart = () => {
  basket = [];
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartIems();
  TotalAmount();
  calculation();
}