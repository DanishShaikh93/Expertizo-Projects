// Retrieve totalQty from localStorage
let totalQty = parseInt(localStorage.getItem('totalQty')) || 0;

// Display the retrieved totalQty
let basketBox = document.querySelector(".basketQty");
basketBox.innerHTML = `${totalQty}`;

// User Register Code Start
let regForm = document.querySelector("#regForm");

        //Following variable userRegInfo checks if there is no data in localstorage key regInfo by default userRegInfo is blank array otherwise put data in it.
        let userRegInfo = JSON.parse(localStorage.getItem('regInfo')) || [];
        
     regForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let isUserLogin = JSON.parse(localStorage.getItem('curLoginUser'));
    if(Array.isArray(isUserLogin) && isUserLogin.length > 0){
        console.log(`You already login with another account`);
           
        }else{
            let nameField = document.querySelector("#nameField").value;
            let emailField = document.querySelector("#emailField").value;
            let passwordField = document.querySelector("#passwordField").value;
    
            let userInfo = {
                userName: nameField,
                userEmail: emailField,
                userPass: passwordField
            };
    
            userRegInfo.push(userInfo);
            localStorage.setItem('regInfo', JSON.stringify(userRegInfo));
    
            console.log(userInfo);
    
            document.querySelector("#nameField").value = "";
            document.querySelector("#emailField").value = "";
            document.querySelector("#passwordField").value = "";
            Swal.fire({
                title: "Successfully Register",
                text: "Please wait.. Redirecting to you login page",
                icon: "success",
              });
              setTimeout(function() {
                window.location="login.html";
            }, 2000);
        }

        });



