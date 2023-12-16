//billing details info
let bdInfo=document.querySelector(".bdInfo");

//Get current Login user info from localstorage
let wlcmUser=document.querySelector(".wlcmUser");
let loginUserBox=document.querySelector(".loginUserBox");
let loginUser = JSON.parse(localStorage.getItem('curLoginUser'));
console.log(loginUser);
if(Array.isArray(loginUser)){
wlcmUser.innerHTML=`<span>Welcome ${loginUser[0].userName} <i class="fa fa-smile-o"></i></span>`;
  loginUserBox.innerHTML= `
  <button class="btn btn-danger" onclick="LogOut()">Log Out</button>
  `;

  bdInfo.innerHTML=`
  <h5><strong><i>Customer Name:</i></strong> ${loginUser[0].userName}</h5>
  <h5><strong><i>Customer Email:</i></strong> ${loginUser[0].userEmail}</h5>
  `;
  
}else{
  wlcmUser.innerHTML="";
  loginUserBox.innerHTML=`
  <a class="btn btn-outline-light me-2" href="login.html">Login</a> 
  <a class="btn btn-warning" href="register.html">Register</a>
  `;
}

function LogOut() {
  wlcmUser.innerHTML="";
  localStorage.removeItem('curLoginUser');
  loginUserBox.innerHTML=`
  <a class="btn btn-outline-light me-2" href="login.html">Login</a> 
  <a class="btn btn-warning" href="register.html">Register</a>
  `;
  
  Swal.fire({
    title: "Successfully Logout",
    text: "Login back if you want to buy purchase more products",
    icon: "success",
  });
  
  setTimeout(function() {
    window.location='index.html';
}, 2000);
}