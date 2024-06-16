let passShowIcon = document.getElementById("show-hide");
let passindicator = document.getElementById("indicator-text");
let passwordinput = document.getElementById("password");
let passindicatorControl = document.querySelector(".main-indicator");

passShowIcon.addEventListener("click",() => {

   if(passwordinput.type === "password"){
      passwordinput.type = "text";
      passShowIcon.classList.replace("uil-eye-slash","uil-eye")
   }
   else{
      passwordinput.type = "password";
      passShowIcon.classList.replace("uil-eye","uil-eye-slash")
   }
})

passwordinput.addEventListener("keyup",() => {
   if(passwordinput.value == ""){
      passindicator.innerHTML = "Please Enter Password"
      passindicatorControl.style.width = "0%"
      passwordinput.style.borderColor = "red"
      passindicator.style.color = "red"
   }

   else if(passwordinput.value.length == 4){
      passindicator.innerHTML = "Weak Password"
      passindicator.style.color = "red"
      passindicatorControl.style.backgroundColor = "red"
      passindicatorControl.style.width = "30%"
      passwordinput.style.borderColor = ""
   }

   else if(passwordinput.value.length == 7){
      passindicator.innerHTML = "Medium Password"
      passindicator.style.color = "#7d5fff"
      passindicatorControl.style.backgroundColor = "#7d5fff"
      passindicatorControl.style.width = "55%"
      passwordinput.style.borderColor = ""
   }

   else if(passwordinput.value.length == 10){
      passindicator.innerHTML = "Strong Password"
      passindicator.style.color = "#1e90ff"
      passindicatorControl.style.backgroundColor = "#1e90ff"
      passindicatorControl.style.width = "100%"
      passwordinput.style.borderColor = "#1e90ff"
   }
})

// !Check Error in INPUT
 
let name = document.getElementById("name")
let number = document.getElementById("number")
let email = document.getElementById("email")

name.addEventListener("keyup",checkError)
number.addEventListener("keyup",checkError)
email.addEventListener("keyup",checkError)

function checkError(){

   // User Value Get
   let email = document.getElementById("email")
   let username = name.value;
   let usernumber = number.value;
   let useremail = email.value;

   // Email Pattern

   let pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

   let error_name = document.getElementById("error_name")
   let error_number = document.getElementById("error_number")
   let error_email = document.getElementById("error_email")

   // When user fill right information

   let rightname = document.querySelector(".show-name");
   let rightnumber = document.querySelector(".show-number");
   let rightemail = document.querySelector(".show-email");
   let rightpassword = document.querySelector(".show-password");


   // Name INPUT

   if(username == ""){
      error_name.innerHTML = "Please Enter your name"
      name.style.borderColor = "red"
      rightname.classList.replace("uil-check-circle","uil-user")
      rightname.style.color = ""

      return false;
   }

   else if(username.length == 5){
      name.style.borderColor = "#1e90ff";
      error_name.innerHTML = ""
      rightname.classList.replace("uil-user","uil-check-circle")
      rightname.style.color = "#1e90ff"
   }
   else{
      name.style.borderColor = "#1e90ff";
      error_name.innerHTML = ""
      rightname.classList.replace("uil-user","uil-check-circle")
      rightname.style.color = "#1e90ff"
      localStorage.setItem("name",username)
      true;
   }

   // Mobile Number INPUT

   if(usernumber == ""){
      error_number.innerHTML = "Please enter mobile number"
      error_number.style.color = "red"
      number.style.borderColor = "red"
      rightnumber.classList.replace("uil-check-circle","uil-phone")
      rightnumber.style.color = ""
      return false;
   }

   else if(usernumber.length == 5){
      error_number.innerHTML = "Mobile number must be 10 digits";
      error_number.style.color = "red"
      number.style.borderColor = ""
      rightnumber.classList.replace("uil-check-circle","uil-phone")
      rightnumber.style.color = ""
   }

   else if(usernumber.length == 10){
      error_number.innerHTML = "";
      number.style.borderColor = "#1e90ff"
      rightnumber.classList.replace("uil-phone","uil-check-circle")
      rightnumber.style.color = "#1e90ff"
   
   }

   else if(usernumber.length > 10){
      error_number.innerHTML = "Mobile number must be 10 digits";
      number.style.borderColor = "red"
      rightnumber.classList.replace("uil-check-circle","uil-phone")
      rightnumber.style.color = ""
   }
   else {
      true;
   }

   // Email INPUT

   if(useremail == ""){
      error_email.innerHTML = "Please Enter email"
      error_email.style.borderColor = "red"
      rightemail.classList.replace("uil-check-circle","uil-envelope-minus")
      rightemail.style.color = ""
      email.style.borderColor = "red"

      return false;
   }

   else if(useremail.match(pattern)){
      error_email.innerHTML = ""
      email.style.borderColor = "#1e90ff"
      rightemail.classList.replace("uil-envelope-minus","uil-check-circle")
      rightemail.style.color = "#1e90ff"
   }
   else {
      true;
   }

}

function success(){
   location.href = "home.html"
}



