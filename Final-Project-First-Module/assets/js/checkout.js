// Retrieve totalQty from localStorage
let totalQty = parseInt(localStorage.getItem('totalQty')) || 0;

// Display the retrieved totalQty
let basketBox = document.querySelector(".basketQty");
basketBox.innerHTML = `${totalQty}`;



let cartItemsBox= document.querySelector(".cartItemsBox");
        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        let cartTotal= document.querySelector(".cartTotal");
       //Render cart items function Start
        function renderCartItems() {
            let loginUser2 = JSON.parse(localStorage.getItem('curLoginUser'));
            if(loginUser2){ 
            let subtotal;
            cartTotal.innerHTML ="";
            let cartTotalPrice=0; 
            if (Array.isArray(cartItems) && cartItems.length > 0) {
            cartItems.forEach(function(items,id) {
                cartTotalPrice += items.price * items.qty;
                console.log(cartTotalPrice);
                 subtotal = items.price * items.qty;
                cartItemsBox.innerHTML += `
                <tr>
            <td><img src="${items.image}" height="100"/></td>
            <td><p>${items.title}</p></td>
            <td class="text-center"><p>$${items.price}</p></td>
            <td class="text-center">
            <p>
           <span id="qty">${items.qty}</span> 
            </p>
            </td>
            <td class="text-center"><p class="spTotal">$${subtotal.toFixed(2)}</p></td>
            
          </tr>
       `;
         cartTotal.innerHTML =`<strong>Total Order Amount</strong><br> $${(cartTotalPrice.toFixed(2))}`;
            });
        } else {
            window.location="cart.html"
        }
    }else {
        window.location="cart.html"
    }
        }

        renderCartItems();
        //Render cart items function Close



        



        
