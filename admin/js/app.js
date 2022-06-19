var carApi = 'http://localhost:3000/car';


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
    console.log(name)
    var price = document.querySelector('input[name="price"]').value;
    console.log(price)
    var distance = document.querySelector('input[name="distance"]').value;
    var image = document.querySelector('input[name="image"]').value;
    var address = document.querySelector('input[name="address"]').value;
    var details = document.querySelector('input[name="details"]').value;

    var form = {
        name: name,
        price: price,
        distance: distance,
        image: image,
        address: address,
        details: details
    }
    fixcar(form, id)

}



function render(cars) {
    const heading = document.querySelector('.heading');

    console.log(cars)
    let htmls = cars.map((car,i) =>
        `
        <tr>
        <th scope="row">${i+1}</th>
        <td>${car.name}</td>
        <td>${car.price}</td>
        <td><img class="image" src="../assets/img/${car.image}"></td>
        <td>${car.distance}</td>
        
        <td><button onclick="handledeletecar(${car.id})">xóa</button></td>
        <td><button onclick="handlefixcar(${car.id})">sửa</button></td>
    </tr>
        `
    )

    {/* <td><a href="../assets/buyProduce/${car.address}">${car.address}</a></td>
    <td><a href="../assets/productiondetail/${car.details}">${car.details}</a></td> */}

    heading.innerHTML = htmls.join('')
}



function handlecreate() {
    const createbtn = document.querySelector('#create');
    createbtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        console.log(name)
        var price = document.querySelector('input[name="price"]').value;
        console.log(price)
        var distance = document.querySelector('input[name="distance"]').value;
        var image = document.querySelector('input[name="image"]').value;
        var address = document.querySelector('input[name="address"]').value;
        var details = document.querySelector('input[name="details"]').value;
        var form = {
            name: name,
            price: price,
            distance: distance,
            image: image,
            address: address,
            details: details
        }

        createcar(form, () => getcar(render))

    }
}
