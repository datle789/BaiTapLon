const checkbox = document.querySelector(".check-box");
const register = document.querySelector(".btn-register")

checkbox.onclick = function(){
    register.classList.remove("disabled");
}
