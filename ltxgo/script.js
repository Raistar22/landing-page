const formOpenBtn=document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginupBtn=document.querySelector("#login"),
pwShowHide=document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", ()=> home.classList.add("show"));
formCloseBtn.addEventListener("click", ()=> home.classList.remove("show")); 

pwShowHide.forEach(icon=> {
    let getPwInput=icon.parentElement.querySelector("input");
    console.log(getPwInput);
});

signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
});