
const responsiveMenu = document.querySelector(".menuResponsive");

const navA1 = document.getElementById("homeA");
const navA2 = document.getElementById("aboutA");
const navA3 = document.getElementById("servicesA");
const navA4 = document.getElementById("contactA");

const form = document.querySelector("form");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("email");
const userSubject = document.getElementById("subject");
const userMessage = document.getElementById("message");
const errorMsg = document.getElementById("adMessage");


form.addEventListener("submit", (e) =>{
    if(userName.value === "" || userEmail.value === "" || userSubject.value === "" || userMessage.value === ""){
        e.preventDefault();
        userName.style.border = "1px solid red"
        userEmail.style.border = "1px solid red"
        userSubject.style.border = "1px solid red"
        userMessage.style.border = "1px solid red"
    }

    else if(!userEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ){
        e.preventDefault();
        userName.style.border = "1px solid red"
        userEmail.style.border = "1px solid red"
        userSubject.style.border = "1px solid red"
        userMessage.style.border = "1px solid red"

        errorMsg.style.color = "red"
        errorMsg.textContent = "Please  enter a valid email address";

    }


    else{
        userName.style.border = "1px solid #e1e1e1";
        userEmail.style.border = "1px solid #e1e1e1";
        userSubject.style.border = "1px solid #e1e1e1";
        userMessage.style.border = "1px solid #e1e1e1";
       return true;
    
    };
});

const showNav = () => {
    responsiveMenu.classList.toggle("appear");
};

navA1.addEventListener("click", () => {
    responsiveMenu.classList.remove("appear");
});

navA2.addEventListener("click", () => {
    responsiveMenu.classList.remove("appear");
});

navA3.addEventListener("click", () => {
    responsiveMenu.classList.remove("appear");
});

navA4.addEventListener("click", () => {
    responsiveMenu.classList.remove("appear");
});