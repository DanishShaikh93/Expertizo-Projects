// Retrieve totalQty from localStorage
let totalQty = parseInt(localStorage.getItem('totalQty')) || 0;

// Display the retrieved totalQty
let basketBox = document.querySelector(".basketQty");
basketBox.innerHTML = `${totalQty}`;


//User Login Code Start

let loginForm= document.querySelector("#loginForm");
        let regUserInfo = JSON.parse(localStorage.getItem('regInfo'));
        let err=document.querySelector(".err");
        let loginUserInfo=[];
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            let emailField = document.querySelector("#emailField").value;
            let passwordField = document.querySelector("#passwordField").value;

            
            // console.log(regUserInfo);
            if(Array.isArray(regUserInfo) && regUserInfo.length > 0){
            for (let i = 0; i < regUserInfo.length; i++) {
                if(regUserInfo[i].userEmail === emailField && regUserInfo[i].userPass === passwordField){
                console.log(`Logins Matched`); 
                let userData={ 
                 userName: regUserInfo[i].userName,
                 userEmail: regUserInfo[i].userEmail,
                 password: regUserInfo[i].userPass
                };
                loginUserInfo.push(userData);
                localStorage.setItem('curLoginUser', JSON.stringify(loginUserInfo));
                console.log(loginUserInfo);

                Swal.fire({
                    title: "Successfully Login",
                    text: "Howdy! Explore new products and winter sale",
                    icon: "success",
                  });
                  setTimeout(function() {
                    window.location="index.html";
                }, 2000);

                break;
                }else{
                    loginUserInfo=[];
                    // console.log(loginUserInfo);
                   err.innerHTML= `<i class="fa fa-exclamation-triangle"></i> Incorrect Login Details`;
        }
            }   
        }else{
            loginUserInfo=[];
            // console.log(loginUserInfo);
           err.innerHTML= `<i class="fa fa-exclamation-triangle"></i> Incorrect Login Details`;
}
            document.querySelector("#emailField").value = "";
            document.querySelector("#passwordField").value = "";

        })