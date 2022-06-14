var carApi = 'http://localhost:3000/users';


function start() {
    getcar(render)

}

start();

function getcar(callback) {
    fetch(carApi)
        .then(response => response.json())
        .then(callback)
}


function render(users) {
    var login = document.querySelector('#login');



        login.addEventListener('click',()=>{
            var emailValue = document.querySelector('#email').value;
            var passwordValue = document.querySelector('#password').value;
           
            
            let check = false;
            users.forEach(user => {
                if(emailValue===user.email && passwordValue===user.password){
                    check = true;
                    //login.href ="../../index.html";
                }
            })

            if(check) {
                login.href ="../../index-users.html";
            }else if(emailValue==="admin@gmail.com" && passwordValue==="admin"){
                login.href="../../admin/admin.html"
            }else{
                alert("tài khoản không đúng")
            }
        })

    
}

/* var login = document.querySelector('#login');
login.addEventListener('click',()=>{
    var emailValue = document.querySelector('#email').value;
    var passwordValue = document.querySelector('#password').value;
    if(emailValue==="admin@gmail.com" && passwordValue==="admin"){
        login.href="../../admin/admin.html"
    }else{
        alert("tài khoản không đúng")
    }
}) */