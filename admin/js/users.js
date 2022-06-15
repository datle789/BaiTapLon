var carApi = 'http://localhost:3000/users';


function start() {
    getcar(render)

    handlecreate()
}

start();

function getcar(callback) {
    fetch(carApi)
        .then(response => response.json())
        .then(callback)
}

function createcar(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(carApi, options)
        .then(response => response.json())
        .then(callback)
}

function handledeletecar(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(carApi + "/" + id, options)
        .then(response => response.json())
        .then(() => getcar(render))
}


function fixcar(data, id) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    }
    fetch(carApi + "/" + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(() => getcar(render))
}


function handlefixcar(id) {
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;

    var form = {
        name: name,
        email: email,
        password: password,
    }

    fixcar(form, id)

}



function render(cars) {
    const heading = document.querySelector('.heading');

    console.log(cars)
    let htmls = cars.map((car, i) =>
        `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${car.name}</td>
        <td>${car.email}</td>
        <td>${car.password}</td>
        <td><button onclick="handledeletecar(${car.id})">xóa</button></td>
        <td><button onclick="handlefixcar(${car.id})">sửa</button></td>
    </tr>
        `
    )

    heading.innerHTML = htmls.join('')
}



function handlecreate() {
    const createbtn = document.querySelector('#add');
    createbtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var password = document.querySelector('input[name="password"]').value;

        if(name === "" || email === "" || password === ""){
            alert("Please enter")
        }else{
            add.href ="./form-success.html"
        }

        var form = {
            name: name,
            email: email,
            password: password,
        }

        createcar(form, () => getcar(render))

    }
}