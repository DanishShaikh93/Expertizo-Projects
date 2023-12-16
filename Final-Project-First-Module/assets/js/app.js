//Fetch Products From axios
let result = document.querySelector(".result");
let apiData;
axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    apiData = response.data;
    //console.log(apiData);
    apiData.forEach((product, id) => {
      result.innerHTML += `
       
    <div class="card mb-3 p-3" style="width: 24%;">
  <img  src="${product.image}" height="100" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <h5 class="card-title">${product.price}</h5>
    <p class="card-text">${product.description}</p>
    <button onclick="addToCart(${id})" class="btn btn-warning">Add To Cart</button>
  </div>
</div>
       `;

    });
  }).catch(function (err) {
    console.log(err);
  });


  //local storage data
let localData = JSON.parse(localStorage.getItem('cartItems'));
console.log(localData);
let cartData=[];
if(Array.isArray(localData)){
  cartData = [...localData];
  console.log("cartData variable after add to cart", cartData);
}else{
  cartData=[];
}





//start basket function
let totalQty = parseInt(localStorage.getItem('totalQty')) || 0;

// Update total quantity displayed
let basketBox = document.querySelector(".basketQty");
basketBox.innerHTML = `${totalQty}`;

function updateTotalQty() {
    // Update total quantity
    totalQty = cartData.reduce((allQty, item) => allQty + item.qty, 0);
    basketBox.innerHTML = `${totalQty}`;

    // Store the updated totalQty in localStorage
    localStorage.setItem('totalQty', totalQty.toString());
}

//close basket function





  function addToCart(index) {
    let loginUser2 = JSON.parse(localStorage.getItem('curLoginUser'));
    if(loginUser2){    
    const selectedProduct = apiData[index];
    const existingProduct = cartData.find(item => item.id === selectedProduct.id);
  
    if (existingProduct) {
      // If the product already exists in cartData, update its quantity
      existingProduct.qty += 1;
      console.log("Product exists, quantity updated:", cartData);
    } else {
      // If the product doesn't exist, add it to cartData
      selectedProduct.qty = 1;
      cartData.push(selectedProduct);
      console.log("Product added to cart:", cartData);
    }
  
    // Update total quantity function executed when addToCart function executed.
    updateTotalQty();
  
    Swal.fire({
      title: "Good job!",
      text: "Product was successfully added to your cart",
      icon: "success",
    });

  }else{
    Swal.fire({
      icon: "error",
      title: "You are not login..!  ",
      text: "Please login to continue purchase",
      footer: '<a href="login.html" class="btn btn-warning">Login Existing Account</a> OR <a href="register.html" class="btn btn-warning">Create New Account</a>'
    });
  }
  }




  
  // Proceed to checkout function
  let cartBtn = document.querySelector(".cartBtn");
  cartBtn.addEventListener('click', () => {
    localStorage.setItem('cartItems', JSON.stringify(cartData));
    //save total quantity
    localStorage.setItem('totalQty', totalQty.toString());
    window.location = 'cart.html';
  });
  























































// //local storage data
// let localData = JSON.parse(localStorage.getItem('cartItems'));
// console.log(localData);
// let cartData=[];
// if(Array.isArray(localData)){
//   cartData = [...localData];
//   console.log("cartData variable after add to cart", cartData);
// }else{
//   cartData=[];
// }


// //Get Specific Product Object When Click Add To Cart

// function addToCart(index) {
//   console.log(apiData[index].id);
// if(cartData.includes(apiData[index].id)){
//   //If carData have the selected index object in the array run the loop and match its index if find just increament the qty key of that object but not push the whole product object.
//   console.log("Product exist do the following");
//   for (let i = 0; i < cartData.length; i++) {
//     console.log(cartData[i].id);
//     if(cartData[i].id == apiData[index].id){
//       cartData[i].qty += 1;
//       console.log(`If condition is working`, cartData);
//     }
//     // if(cartData.length > 0){
//     //   basket = cartData[i].qty;
//     //   console.log(basket);
//     // }
    
//   }

// }else{
//   console.log("Product not exist do the following");
//   apiData[index].qty = 1
//   cartData.push(apiData[index]);
//   console.log(`Else condition is working`, cartData);
// }


// let totalQty=0;
// let basketBox=document.querySelector(".basketQty");
// for (let j = 0; j < cartData.length; j++) {
//     totalQty += cartData[j].qty;
//     basketBox.innerHTML=`${totalQty}`;
// }

// Swal.fire({
//   title: "Good job!",
//   text: "Product was successfully added to your cart",
//   icon: "success",
// });

// }

// //proceed to checkout function all item which are already pushed in cart will save to local storage and redirect to cart page after this function execute.
// let cartBtn = document.querySelector(".cartBtn");
// let err=document.querySelector(".err");


// cartBtn.addEventListener('click', () => {
//     localStorage.setItem('cartItems', JSON.stringify(cartData));
//     window.location = 'cart.html'
// })




