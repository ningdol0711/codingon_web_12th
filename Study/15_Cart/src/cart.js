let shop = document.querySelector('#shop');
let cart = JSON.parse(localStorage.getItem('count')) || [];

let genshop = () => {
  return shop.innerHTML = shopItems.map(e => {
    let {id, name, price, desc, img} = e;
    let search = cart.find(x => x.id == id) || [];
    return `
    <div id="product-id-${id}" class="item">
      <img width="220" src="${img}">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${search.item == undefined? 0 : search.item}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
    `
  }).join('');
}

const quantity = document.querySelector('.quantity');

function increment(id) {
  let selectedId = id;
  let search = cart.find(x => {x.id == selectedId});
  if(search == undefined) {
    cart.push({
      id: selectedId.id,
      item: 1,
    })
  }
  else {
    search.item += 1;
  }
  update(selectedId.id);
  localStorage.setItem('count', JSON.stringify(cart));
}

function decrement(id) {
  let selectedId = id;
  let search = cart.find(x => {x.id == selectedId});
  if(search == undefined) {
    return;
  }
  else if(search.item == 0) {
    return;
  }
  else {
    search.item -= 1;
  }
  update(selectedId.id);
  cart = cart.filter(x => x.item !== 0);
  localStorage.setItem('count', JSON.stringify(cart));
}

let update = (id) => {
  let search = cart.find(x => {x.id == id;});
  document.querySelector('#id').innerHTML = search.item;
}

function calc() {
  let cartcnt = document.querySelector('#cartAmount');
  cartcnt.innerHTML = cart.map(x => x.item).reduce((x, y) => {x+y, 0})
}

genshop();
calc();