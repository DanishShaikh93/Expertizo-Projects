let cartItemsBox = document.querySelector(".cartItemsBox");
let cartItems = JSON.parse(localStorage.getItem('cartItems'));
let cartTotal = document.querySelector(".cartTotal");

// Initialize total quantity based on cartData
let totalQty = parseInt(localStorage.getItem('totalQty')) || 0;

// Update total quantity displayed
let basketBox = document.querySelector(".basketQty");
basketBox.innerHTML = `${totalQty}`;

let cartLoginErr=document.querySelector(".cartLoginErr");
//Render cart items function Start
function renderCartItems() {
    let loginUser2 = JSON.parse(localStorage.getItem('curLoginUser'));
    if(loginUser2){  
    let subtotal;
    cartTotal.innerHTML = "";
    let cartTotalPrice = 0;
    if (Array.isArray(cartItems) && cartItems.length > 0) {
        cartItems.forEach(function (items, id) {
            cartTotalPrice += items.price * items.qty;
            console.log(cartTotalPrice);
            subtotal = items.price * items.qty;
            cartItemsBox.innerHTML += `
                <tr>
           <td><button onclick="deleteCartItem(${id})" class="btn btn-danger">X</button></td>
            <td><img src="${items.image}" height="100"/></td>
            <td><p>${items.title}</p></td>
            <td class="text-center"><p>$${items.price}</p></td>
            <td class="text-center">
            <p>
            <button onclick="qtyMinus(${id})" class="qtyBtn">-</button> 
            <span id="qty">${items.qty}</span> 
            <button onclick="qtyPlus(${id})" class="qtyBtn">+</button>
            </p>
            </td>
            <td class="text-center"><p class="spTotal">$${subtotal.toFixed(2)}</p></td>
            
          </tr>
       `;
            cartTotal.innerHTML = `<strong>Cart Total Amount</strong><br> $${(cartTotalPrice.toFixed(2))}`;
        });
    } else {
        cartItemsBox.innerHTML = `Cart is empty`;
    }

}else{
    cartLoginErr.innerHTML= `You are not login..! Please login to continue purchase`;
  }
}

renderCartItems();
//Render cart items function Close


//Increase Product Qunatity Function

function qtyPlus(index) {
    console.log(cartItems[index]);
    cartItemsBox.innerHTML = "";
    cartItems[index].qty++;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update total quantity
    updateTotalQty();
    renderCartItems();
}

//Decrease Product Qunatity Function
function qtyMinus(index) {
    cartItemsBox.innerHTML = "";
    if (cartItems[index].qty === 1) {
        cartItems.splice(index, 1);
    } else {
        cartItems[index].qty--;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update total quantity
    updateTotalQty();
    renderCartItems();
}


//start delete cart item function
function deleteCartItem(index) {
    cartItemsBox.innerHTML = "";
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update total quantity
    updateTotalQty();
    renderCartItems();
}





// Update total quantity function
function updateTotalQty() {
    totalQty = cartItems.reduce((allQty, item) => allQty + item.qty, 0);
    basketBox.innerHTML = `${totalQty}`;
    localStorage.setItem('totalQty', totalQty.toString());
}




//back to shop function
let backToShop = document.querySelector(".backToShop");
backToShop.addEventListener('click', () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location = 'index.html';
})
